import { useRouter } from 'next/router';
import topics from '../api/topics';
export default function Learn() {
  const router = useRouter();
  const { name } = router.query;
  const topic = topics.find((topic) => topic.id === name);

  if (topic) {
    return (
      <>
        <h1>Learn {topic.id} page</h1>
        <p>{topic.about}l</p>
        <p>The route matches the name of the file. And is automatically</p>
      </>
    );
  }

  return <h1>Topic not found</h1>;
}
