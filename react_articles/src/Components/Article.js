import React, { Component } from "react";
import axios from "axios";

class Article extends Component {
  save = (main, snippet, url) => {
    axios
      .post("http://localhost:8080/articles/save", {
        user_id: this.props.userId,
        headline: main,
        content: snippet,
        web_url: url,
      })
      .then((res) => {
        this.props.sendSaved(res.data);
      });
  };

  render() {
    return (
      <section className="showArticle">
        <div className="articleBox">
          <h2>{this.props.article.headline.main}</h2>
          <p>{this.props.article.snippet}</p>
          <div className="articleButtons">
            <button className="saveButton">
              <a href={this.props.article.web_url} target="_blank">
                LINK
              </a>
            </button>
            <button
              onClick={() =>
                this.save(
                  this.props.article.headline.main,
                  this.props.article.snippet,
                  this.props.article.web_url
                )
              }
              className="saveButton"
            >
              SAVE
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Article;
