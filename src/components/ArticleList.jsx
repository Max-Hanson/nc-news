import { Link } from "react-router";

const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <section key={article.article_id}>
            <div className="box">
              <img className="art-img" src={article.article_img_url} />
              <Link to={`/article/${article.article_id}`}>
                <button className="go-to-article">
                  <h3 className="article-title">{article.title}</h3>
                </button>
              </Link>
              <p className="article-stuff">
                {article.created_at.slice(0, 10)}
                <br></br>
                {article.author}
              </p>
              <p className="votes">Votes: {article.votes}</p>
            </div>
          </section>
        );
      })}
    </ul>
  );
};
export default ArticleList;
