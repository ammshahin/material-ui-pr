import './App.css';
import { useEffect, useState } from 'react';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() =>
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=b89e71e2ce554b49be4114766ad7a37f')

      .then(res => res.json())
      .then(data => setArticles(data.articles))
  ,[])
  
  return (
    <div className="App">
      {
        articles.map((articles, idx) => <News key={idx} articles={articles}></News> )
      }
    </div>
  );
}

export default App;
