import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Information() {
  const router = useRouter();

  return (
    <>
      <hr />
      <code>
        <table>
          <tr>
            <th colSpan={2}>
              <Link
                href="https://nextjs.org/docs/api-reference/next/router"
                target="_blank"
              >
                Router
              </Link>
            </th>
          </tr>
          <tr>
            <td>pathname</td>
            <td>{router.pathname}</td>
          </tr>
          <tr>
            <td>query</td>
            <td>{JSON.stringify(router.query)}</td>
          </tr>
          <tr>
            <td>href</td>
            <td>{router.asPath}</td>
          </tr>
        </table>
      </code>
    </>
  );
}
