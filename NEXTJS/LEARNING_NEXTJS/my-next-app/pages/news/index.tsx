import Layout from '../../components/Layout';
export default function News({ results }) {
  return (
    <Layout>
      <h1>Top Stories</h1>
      <ul>
        {results.map((r) => {
          return (
            <li key={results.uri}>
              {/* Checkout noreferrer, noopener */}
              <a href={r.url} rel="noreferrer noopener" target="_blank">
                {r.title}
              </a>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

// const API_KEY = '9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ';
const API_KEY = 'gyp1T90ydOMPH0WAHjgiWqXqkj0eEyOi';
export async function getStaticProps() {
  const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
  console.log('the url', URL);
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data.results);

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { results: data.results },
  };
}
