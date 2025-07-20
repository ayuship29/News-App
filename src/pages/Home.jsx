import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NewsList from '../components/NewsList';

function Home() {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('general');

 useEffect(() => {
  const fetchNews = async () => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    console.log(" API Key:", apiKey);

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&apiKey=${apiKey}`;

    console.log("Fetching from:", url);

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(" API Response:", data);

      if (data.status === "ok") {
        setArticles(data.articles || []);
      } else {
        console.error("API Error:", data.message);
        setArticles([]);
      }
    } catch (err) {
      console.error("Failed to fetch news:", err);
      setArticles([]);
    }
  };

  fetchNews();
}, [selectedCategory]);


  return (
    <div className='min-h-screen flex flex-col bg-gray-100 text-gray-900'>
      <Header selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
     <main className="flex-grow container mx-auto px-4 py-6">
      {articles.length === 0 ? (
  <p className="text-center text-gray-500 mt-4">No articles found</p>
) : (
  <NewsList articles={articles} />
)}
</main>

 <footer className="text-center text-black mt-8 bg-blue-500 p-3 font-bold">
      NewsNow by Ayushi Prajapati
    </footer>

    </div>
  );
}

export default Home;
