import RandomStringMessage from 'components/general/randomStringMessages';
import CategoriesTable from 'components/hours/categoriesTable';
import TotalsTable from 'components/hours/totalsTable';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { pronetDateString } from 'utils/protimeHelpers';
import type { Category } from '../../interfaces/Category';

const Hours = ({ categories }: { categories: Category[] }) => {
  const dateString = pronetDateString();
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
        <TotalsTable categories={categories} />
        <CategoriesTable categories={categories} />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const url = `http://localhost:3000/api/categories`;
    const res = await fetch(url);
    const categories: Category[] = await res.json();

    console.log('the categories', categories);
    return {
      props: categories,
    };
  } catch (e) {
    console.log(e);
    return {
      props: {},
    };
  }
};

export default Hours;
