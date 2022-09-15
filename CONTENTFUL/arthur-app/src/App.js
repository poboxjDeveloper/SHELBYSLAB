// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const query = `{
    theGarrisonCollection{
      items{
        sys {
          id
        }
        title
        body{
          json
        }
      }
      total
    }
  }
  `;

  // define the initial state
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/v3qjahwguuko/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authenticate the request
          Authorization: 'Bearer YVhBmOinuN7b6sdIRuZQ-sFw-al1Q7F49S-jNKCEhUY',
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.theGarrisonCollection.items[0]);
      });
  }, []);

  // show a loading screen case the data hasn't arrived yet
  if (!page) {
    return 'Loading...';
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>{page.title}</p>
      </header>
    </div>
  );
}

export default App;
