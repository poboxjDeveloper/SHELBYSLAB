import Layout from '../components/Layout';
import contacts from './api/contacts';
import Link from 'next/link';

export default function Contacts() {
  return (
    <Layout>
      <h1>Contacts</h1>
      <ul>
        {contacts.map((contact, ix) => {
          return (
            <li key={contact.id + ix}>
              <Link href={`contacts/${contact.id}`}>
                <a>{contact.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
