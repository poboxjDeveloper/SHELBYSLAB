import Layout from 'components/general/layout';
import RandomStringMessage from 'components/general/randomStringMessages';

const RandomString = () => {
  return (
    <Layout>
      <h2>1 word</h2>
      <RandomStringMessage nrOfWords={1} />
      <hr />
      <h2>10 word</h2>
      <RandomStringMessage nrOfWords={10} />
      <hr />
      <h2>100 word</h2>
      <RandomStringMessage nrOfWords={100} />
      <hr />
      <h2>1000 word</h2>
      <RandomStringMessage nrOfWords={1000} />
      <hr />
      <h2>No nrOfWords provided defaults to 50 words</h2>
      <RandomStringMessage />
      <hr />
      <h2>Random number less then 100</h2>
      <RandomStringMessage nrOfWords={Math.floor(Math.random() * 100)} />
    </Layout>
  );
};

export default RandomString;
