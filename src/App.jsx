import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Heading from "./components/Heading";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { UserAccountProvider } from "./contexts/UserAccount";
import { Route, Routes } from "react-router";
import Article from "./components/Article";
// import { Link } from "react-router";

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setError(false);
    axios
      .get("https://nc-news-quw0.onrender.com/api/articles")
      .then((res) => {
        if (res.data.length === 0) {
          setError(true);
        } else {
          setArticles(res.data.articles);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (isLoading) {
    return <h2>loading...</h2>;
  }
  return (
    <div className="app-container">
      <UserAccountProvider>
        <Heading />

        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ArticleList articles={articles} setArticles={setArticles} />
            }
          ></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/article/:articleId" element={<Article />}></Route>
        </Routes>
      </UserAccountProvider>
    </div>
  );
}

export default App;
