import { Category } from 'interfaces/Category';
import { useEffect, useState } from 'react';

const ClientSide = () => {
  const [data, setData] = useState<Category[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log('useEffect on ClientSide');
    setLoading(true);
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });

    if (isLoading) {
      console.log('isLoading, useEffect', isLoading);
    } else {
      console.log('isLoading, useEffect', isLoading);
    }
  }, [isLoading]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  let theData: string = '';
  if (data) {
    theData = JSON.stringify(data);
  }

  return (
    <div>
      <h1>The data</h1>
      <p>{theData}</p>
    </div>
  );
};

export default ClientSide;
