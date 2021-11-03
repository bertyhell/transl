if (!process.env.REACT_APP_GRAPHQL_ENDPOINT) {
  throw new Error('Environment variable is not set: REACT_APP_GRAPHQL_ENDPOINT');
}

export const DATABASE_CONFIG: { endpoint: string } = {
  endpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT,
};
