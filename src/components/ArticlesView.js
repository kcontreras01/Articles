import React from "react";
import Article from './Article';
import '../styles/articles-view.css';

const ArticlesView = ({ allArticlesFound }) => {
  return (
    <div className="allArticles">
      {allArticlesFound.map((article) => {
        return (
          <Article article={article} key={article._id}/>
        );
      })}
    </div>
  );
}

export default ArticlesView;