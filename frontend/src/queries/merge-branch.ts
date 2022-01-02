import { useMutation } from 'react-query';

async function getMerge({ fromBranchId, intoBranchId }: { fromBranchId: number; intoBranchId: number }): Promise<any> {
  return fetch(
    process.env.REACT_APP_BACKEND_ENDPOINT +
      '/branch/merge?' +
      new URLSearchParams({ fromBranchId: String(fromBranchId), intoBranchId: String(intoBranchId) }).toString(),
  ).then(response => response.json());
}

export function useGetMerge() {
  return useMutation(['getMerge'], getMerge);
}
