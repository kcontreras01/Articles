import React, { Component } from 'react';
// import EditPage from './EditPage';
import axios from 'axios'

class ArticlesView extends Component {
  constructor(props){
    super(props);
    this.state = {
      saved: [],
      results: [],
    }
  this.save = this.save.bind(this);
  this.getResults = this.getResults.bind(this);

  }

	save(main, snippet, url){
    //console.log('user id: ', this.props.userId)
    axios.post('http://localhost:8080/articles/save', {
      user_id: this.props.userId,
      headline: main,
      content: snippet,
      web_url: url
    }).then(res => {
      // console.log('the response is: ',res.data)
      this.props.sendSaved(res.data)
    })   
  }



   getResults() {
    return (
      this.props.dataSearch.map( e => {
        return (
         // console.log('this is e: ', e.web_url),
        <section className="showArticle" key={e._id}>
        	<div className="articleBox">
        	<h2>{e.headline.main}</h2>
        	<p>{e.snippet}</p>
            <div className="articleButtons">
        	     <button className="saveButton"><a href={e.web_url} target="_blank">LINK</a></button>
        	     <button onClick={() => this.save(e.headline.main, e.snippet, e.web_url)} className="saveButton">SAVE</button>
        	   </div>
          </div>
        </section>
        )
      })
    )
  }

  render() {
    return(
      <div className="all">
        {this.getResults()}
      </div>
    )
  }
}

export default ArticlesView;