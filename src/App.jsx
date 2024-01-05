import { useState, useEffect } from 'react'
import UserInput from './UserInput.jsx'
import RenderData from './RenderData.jsx'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);


  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearch = () => {
    fetchArticles();
  };

  const fetchArticles = async () => {
    try {
      const response = await fetch(
        `http://hn.algolia.com/api/v1/search?query=${searchTerm}`
      );
      const data = await response.json();
      setArticles(data.hits);
    } catch (error) {
      console.error('Error', error);
    }
  };

  return (
    <div>
      <h1>Hacker News Search App</h1>
      <UserInput
        searchTerm={searchTerm}
        onSearch={onSearch}
        onInputChange={onInputChange}
      />
      <RenderData articles={articles} />
    </div>
  );
};

export default App
