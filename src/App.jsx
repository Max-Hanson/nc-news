import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ArticleList from "./components/ArticleList";
import Heading from "./components/Heading";
import User from "./components/User";
import NavBar from "./components/NavBar";
import { UserAccountProvider } from "./contexts/UserAccount";
import { Route, Routes } from "react-router";
// import { Link } from "react-router";

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    axios
      .get("https://nc-news-quw0.onrender.com/api/articles")
      .then((res) => {
        console.log(res.data);

        setArticles(res.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
        </Routes>
      </UserAccountProvider>
    </div>
  );
}

export default App;
