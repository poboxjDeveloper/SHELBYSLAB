// import { Category } from 'interfaces/Category';
// import useSWR from 'swr';

import { useCategories } from 'hooks/useCategories';

// const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

// function useCategories() {
//   const { data, error } = useSWR('/api/categories', fetcher);

//   return {
//     categories: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// }

const SwrFetcher = () => {
  // const { data, error } = useSWR('/api/categories', fetcher);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  // const categories: Category[] = data.categories;

  const { categories, isLoading, isError } = useCategories();

  if (isLoading) return <h1>LOADING...</h1>;
  if (isError) return <div>Failed to load</div>;

  return (
    <div>
      <p>nr of categories: </p>
      <p>{JSON.stringify(categories)}</p>
    </div>
  );
};

export default SwrFetcher;
