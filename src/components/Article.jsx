import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setError(false);
    setLoading(true);
    axios
      .get(`https://nc-news-quw0.onrender.com/api/articles/${articleId}`)
      .then((res) => {
        if (res.data.length === 0) {
          setError(true);
        } else {
          setArticle(res.data.article);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [articleId]);
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  return (
    <div>
      <div className="article-top">
        <h1>{article.title}</h1>
        <p>{article.author}</p>
      </div>
      <div>
        <img
          className="single-art-img"
          src={article.article_img_url}
          alt="Article"
        ></img>
      </div>
      <div className="article-info">
        <p>
          Published:{" "}
          {article.created_at ? article.created_at.slice(0, 10) : "N/A"}
        </p>
        <p>Votes: {article.votes}</p>
      </div>
      <div className="art-body">
        <p>{article.body}</p>
      </div>
    </div>
  );
};

export default Article;
