import axios from 'axios';
import { REPL_MODE_STRICT } from 'repl';
interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Index({ items }) {
  console.log(items);
  return (
    <ul>
      {items.map((item) => {
        <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
}

// Runs at build time.
// Generates static page, so loads faster.
export async function getStaticProps() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const res = await fetch(
  //     'https://api.json-generator.com/templates/hs0RBL0INb-g/data?delay=20',
  //     {
  //       method: 'get',
  //       headers: new Headers({
  //         Authorization: 'Bearer 8wnxzd8t00qtf0q2n1pxtpsc3kppstv910s21nai',
  //         'Content-Type': 'application:json; charset=utf-8',
  //       }),
  //     }
  //   );
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.debug;
    return {
      props: { items: res },
    };
  } catch (error) {
    console.log(error);
    return { props: { items: JSON.stringify(error) } };
  }

  //   const items = (await res.json()) as Item[];
  //   return {
  //     props: {
  //       items: items,
  //     },
  //   };
}
