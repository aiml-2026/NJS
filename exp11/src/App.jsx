import React, { useEffect, useState } from 'react';

const App = () => {
  // State to store fetched data and loading/error status
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.slice(0, 10)); // Fetch only the first 10 posts
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Render the component
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Data Fetching Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px', textAlign: 'left' }}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
