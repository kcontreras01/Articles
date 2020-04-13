import React from "react";
import Article from './Article';

const ArticlesView = ({ allArticlesFound }) => {
  return (
    <div className="all">
      {allArticlesFound.map((article) => {
        return (
          <Article article={article} key={article._id}/>
        );
      })}
    </div>
  );
}

export default ArticlesView;