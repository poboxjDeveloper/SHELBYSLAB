import { useRouter } from 'next/router';
import contacts from '../api/contacts';
import Layout from '../../components/Layout';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  const router = useRouter();
  const { contactId } = router.query;
  const contact = contacts.find((contact) => contact.id === contactId);

  if (contact) {
    return (
      <Layout>
        <div className={styles.contact_details}>
          <h1>Contact details</h1>
          <div>id: {contact.id}</div>
          <div>name: {contact.name}</div>
          <div>country: {contact.country}</div>
        </div>

        <a href="#" onClick={() => router.back()}>
          Back
        </a>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Contact details</h1>
        <div>Sorry no contact found</div>
        <a href="#" onClick={() => router.back()}>
          Back
        </a>
      </Layout>
    );
  }
}
