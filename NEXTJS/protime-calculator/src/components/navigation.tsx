import Link from 'next/link';

interface Props {
  title?: string;
}

const Navigation = (props: Props) => {
  return (
    <nav>
      <ol>
        <li>
          <Link href="/">first</Link>
        </li>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/calculator">Calculator</Link>
        </li>
        <li>
          <Link href="/hours">Hours</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navigation;
