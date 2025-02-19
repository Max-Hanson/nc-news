const ArticleList = ({ articles }) => {
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <section key={article.article_id}>
            <div className="box">
              <img className="art-img" src={article.article_img_url} />
              <h3 className="article-title">{article.title}</h3>
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
