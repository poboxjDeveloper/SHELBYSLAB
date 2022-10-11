import Link from 'next/link';

interface Props {
  title?: string;
}

const Navigation = (props: Props) => {
  return (
    <nav>
      <ol>
        <li>
          <Link href="/">{props.title}</Link>
        </li>
        <li>
          <Link href="/randomstring">Random string component</Link>
        </li>
        <li>
          <Link href="/hours">Pronet hours component</Link>
        </li>
        <li>
          <Link href="/calculator">Calculator</Link>
        </li>
      </ol>
    </nav>
  );
};

export default Navigation;
