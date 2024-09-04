import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function NewsPaperApp() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const KEY = "70b890db3bab44af9f60a0c12ad03ec8";

  const getData = async function () {
    if (!search.trim()) return;

    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=${KEY}`
      );
      const data = await response.json();
      console.log(data.articles);
      setNewsData(data.articles);
    } catch (error) {
      console.error("Failed to fetch news data:", error);
    }
  };

  const handleInput = function (e) {
    setSearch(e.target.value);
  };

  const handleKeyDown = function (e) {
    if (e.key === "Enter") {
      getData();
    }
  };

  useEffect(function () {
    getData();
  }, []);

  const handleCategoryClick = function (e) {
    setSearch(e.target.value);
    getData();
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul>
          <a href="#">All News</a>
          <a href="#">Trending</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            value={search}
          />
          <button onClick={getData}>Search</button>
        </div>
      </nav>

      <div>
        <p className="head">Stay Updated with TrendyNews ...</p>
      </div>

      <div className="categoryBtn">
        <button onClick={handleCategoryClick} value="sports">
          Sports
        </button>
        <button onClick={handleCategoryClick} value="politics">
          Politics
        </button>
        <button onClick={handleCategoryClick} value="entertainment">
          Entertainment
        </button>
        <button onClick={handleCategoryClick} value="health">
          Health
        </button>
        <button onClick={handleCategoryClick} value="fitness">
          Fitness
        </button>
      </div>

      <div>
        <Card data={newsData} />
      </div>
    </div>
  );
}
