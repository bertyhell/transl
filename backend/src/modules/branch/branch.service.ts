import { Injectable } from '@nestjs/common';
import {
  getSdk,
  GetTranslationsFromBranchQuery,
  Sdk,
} from '../../queries/config/graphql-generated-types';
import { GraphQLClient } from 'graphql-request';
import { differenceBy, intersectionBy, unionWith, without } from 'lodash';

@Injectable()
export class BranchService {
  private sdk: Sdk;
  constructor() {
    const client = new GraphQLClient(process.env.REACT_APP_GRAPHQL_ENDPOINT);
    this.sdk = getSdk(client);
  }

  getTranslation(branchId: number) {
    return this.sdk.getTranslationsFromBranch({ branchId });
  }

  private mapTranslation = (translation, term, branchId) => ({
    termKey: term.key,
    termId: term.id,
    branchId: branchId,
    translationLanguageId: translation.project_language.language_id,
    translationLanguage: translation.project_language.language.iso_code,
    translationId: translation.id,
    translationValue: translation.translation_value,
  });
  async mergeBranch(fromBranchId: number, intoBranchId: number) {
    const fromBranchTranslations: GetTranslationsFromBranchQuery =
      await this.getTranslation(fromBranchId);
    const intoBranchTranslations: GetTranslationsFromBranchQuery =
      await this.getTranslation(intoBranchId);
    const fromTerms = fromBranchTranslations.branches[0].terms;
    const intoTerms = intoBranchTranslations.branches[0].terms;
    const fromTranslations = fromTerms.flatMap((term) =>
      term.translations.map((translation) =>
        this.mapTranslation(translation, term, fromBranchId),
      ),
    );
    const intoTranslations = intoTerms.flatMap((term) =>
      term.translations.map((translation) =>
        this.mapTranslation(translation, term, intoBranchId),
      ),
    );
    const translationsOnlyInFrom = differenceBy(
      fromTranslations,
      intoTranslations,
      (trans) => trans.termKey + '|' + trans.translationLanguageId,
    );
    const translationsOnlyInInto = differenceBy(
      intoTranslations,
      fromTranslations,
      (trans) => trans.termKey + '|' + trans.translationLanguageId,
    );
    const translationsInBoth = intersectionBy(
      intoTranslations,
      fromTranslations,
      (trans) => trans.termKey + '|' + trans.translationLanguageId,
    );

    const fromWithoutTranslations = fromTerms.filter(
      (t) => t.translations.length === 0,
    );
    const intoWithoutTranslations = intoTerms.filter(
      (t) => t.translations.length === 0,
    );

    const termsWithoutTranslationFrom = differenceBy(
      fromWithoutTranslations,
      intoWithoutTranslations,
      (term) => term.key,
    ).flatMap((term) =>
      term.translations.map((translation) =>
        this.mapTranslation(translation, term, fromBranchId),
      ),
    );
    const termsWithoutTranslationInto = differenceBy(
      intoWithoutTranslations,
      fromWithoutTranslations,
      (term) => term.key,
    ).flatMap((term) =>
      term.translations.map((translation) =>
        this.mapTranslation(translation, term, intoBranchId),
      ),
    );
    const termsWithoutTranslationBoth = intersectionBy(
      fromWithoutTranslations,
      intoWithoutTranslations,
      (term) => term.key,
    ).flatMap((term) =>
      term.translations.map((translation) =>
        this.mapTranslation(translation, term, fromBranchId),
      ),
    );
    const translationDiff = [
      ...termsWithoutTranslationFrom.map((translation) => ({
        from: translation,
        into: null,
        status: 'NO_CONFLICT',
      })),
      ...termsWithoutTranslationInto.map((translation) => ({
        from: null,
        into: translation,
        status: 'NO_CONFLICT',
      })),
      ...termsWithoutTranslationBoth.map((translation) => {
        const fromTranslation = fromWithoutTranslations.find(
          (t) => t.key === translation.termKey,
        );
        const intoTranslation = intoWithoutTranslations.find(
          (t) => t.key === translation.termKey,
        );
        return {
          from: fromTranslation,
          into: intoTranslation,
          status: 'NO_CONFLICT',
        };
      }),
      ...translationsOnlyInFrom.map((translation) => ({
        from: translation,
        into: null,
        status: 'NO_CONFLICT',
      })),
      ...translationsOnlyInInto.map((translation) => ({
        from: null,
        into: translation,
        status: 'NO_CONFLICT',
      })),
      ...translationsInBoth.map((translation) => {
        const fromTranslation = fromTranslations.find(
          (t) =>
            t.termKey === translation.termKey &&
            t.translationLanguageId === translation.translationLanguageId,
        );
        const intoTranslation = intoTranslations.find(
          (t) =>
            t.termKey === translation.termKey &&
            t.translationLanguageId === translation.translationLanguageId,
        );
        return {
          from: fromTranslation,
          into: intoTranslation,
          status:
            fromTranslation.translationValue ===
            intoTranslation.translationValue
              ? 'NO_CONFLICT'
              : 'CONFLICT',
        };
      }),
    ];
    return translationDiff;
  }
}
