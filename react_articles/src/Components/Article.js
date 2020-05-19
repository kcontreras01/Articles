import React from "react";

const Article = ({ article }) => {
  return (
    <section className="showArticle">
    <a href={article.web_url} target="_blank">
      <div className="articleBox">
          <h2>{article.headline.main}</h2>
          <p>{article.snippet}</p>
        </div>
      </a> 
    </section>
  );
}
export default Article;