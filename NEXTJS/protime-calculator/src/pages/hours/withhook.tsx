import CategoriesTable from 'components/hours/categoriesTable';
import TotalsTable from 'components/hours/totalsTable';
import { useCategories } from 'hooks/useCategories';
import Link from 'next/link';
import { pronetDateString } from 'utils/protimeHelpers';

const HoursFromHook = () => {
  const dateString = pronetDateString();
  const { categories, isLoading, isError } = useCategories();

  if (isError) return <>Sorry an error has occurred.</>;
  if (isLoading) return <>Still loading...</>;

  console.log(typeof categories, typeof categories.categories);
  const result =
    typeof categories === 'object' ? categories.categories : categories;

  return (
    <>
      <h1>The Hours</h1>
      <ul>
        <li>
          <Link
            href={`https://testaankoop.myprotime.eu/bff/entitlements/groups/groupdetail/3193/1/${dateString}/${dateString}?excludePerpetualCounters=false&poll=0`}
          >
            <a target="_blank" rel="nofollow noreferrer noopener">
              Download {dateString}.json
            </a>
          </Link>
        </li>
      </ul>
      <div>
        <TotalsTable categories={result} />
        <CategoriesTable categories={result} />
      </div>
    </>
  );
};

export default HoursFromHook;
