import { Injectable } from '@nestjs/common';
import { getSdk } from '../../queries/config/graphql-generated-types';
import { GraphQLClient } from 'graphql-request';

@Injectable()
export class TranslationEventService {
  private client = new GraphQLClient(process.env.REACT_APP_GRAPHQL_ENDPOINT);

  async addBranch(branchName: string, projectId: number) {
    const sdk = getSdk(this.client);
    await sdk.addBranch({ branchName, projectId });
  }
}
