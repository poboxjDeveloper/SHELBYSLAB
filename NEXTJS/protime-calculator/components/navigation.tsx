import Link from 'next/link';

interface Props {
  title?: string;
}

const Navigation = (props: Props) => {
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Navigation;
