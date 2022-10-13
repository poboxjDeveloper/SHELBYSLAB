import { Category } from 'interfaces/Category';
import useSWR from 'swr';

// const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());
const fetcher = (...args: [string, RequestInit]) =>
  fetch(...args).then((res) => res.json());

export const useCategories = () => {
  //Info: https://nextjs.org/docs/basic-features/data-fetching/client-side
  const { data, error } = useSWR('/api/categories', fetcher);

  return {
    categories: data as Category[],
    isLoading: !error && !data,
    isError: error,
  };
};
