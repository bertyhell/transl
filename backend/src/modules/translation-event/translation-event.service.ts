import { Injectable } from '@nestjs/common';
import { getSdk, Sdk } from '../../queries/config/graphql-generated-types';
import { GraphQLClient } from 'graphql-request';

@Injectable()
export class TranslationEventService {
  private sdk: Sdk;
  constructor() {
    const client = new GraphQLClient(process.env.REACT_APP_GRAPHQL_ENDPOINT);
    this.sdk = getSdk(client);
  }

  private async getBranchTranslations(branchId: number): Promise<any[]> {
    const result: any[] = [];
    let branchTranslations;

    do {
      branchTranslations = await this.sdk.getTranslationsFromBranch({
        branchId,
      });

      result.push(...branchTranslations.branches);
    } while (branchTranslations.branches[0].parent_branch);
  }

  async addBranch(branchName: string, projectId: number) {
    await this.sdk.addBranch({ branchName, projectId });
  }
  async mergeBranch(
    projectId: number,
    fromBranchId: number,
    intoBranchId: number,
  ) {}
}
