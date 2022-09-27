import { NextPage } from 'next';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <>
      <pre>This is the index page</pre>
      <pre>
        <Link href="subpages/subpage">Go to the subpage</Link>
      </pre>
    </>
  );
};

export default Index;
