import React, {Component} from 'react';
import axios from 'axios';

class AccountPage extends Component {
	constructor(props){
		super(props);

		this.showSaved = this.showSaved.bind(this);
    this.deleteSaved = this.deleteSaved.bind(this);
    // this.editSaved = this.editSaved.bind(this);

	}

   showSaved() {
    return (
      this.props.dataSearch.map( e => {
        // console.log(e)
        return (
        <section className="showArticle" key={Math.random()}>
        	<div className="articleBox">
        	<h2>{e.headline}</h2>
        	<p>{e.content} <span>Saved on: {e.save_date}</span></p>
            <div className="articleButtons">
        	     <button className="saveButton"><a  href={e.url} target="_blank">LINK</a></button>
               <button className="saveButton" onClick={() => this.deleteSaved(e.id)}>DELETE</button>
               <button className="saveButton" onClick={() => this.props.editFunc(e.id)}>EDIT</button>               
            </div>
        	</div>
        </section>
        )
      })
    )
  }	


  deleteSaved(id){
    // console.log('the id is: ', id)
  	axios.delete(`http://localhost:8080/articles/${id}`)
    .then(res => {
      this.props.deleteFunc();
    })

  }

  // editSaved(id){
  //   // console.log('the id is: ', id)
  //   axios.get(`http://localhost:8080/articles/edit/${id}`)
  //   .then(res => {
  //     // console.log(res)
  //     this.props.editFunc();
  //   })

  // }  


	render() {
		return (
      <div className="all">
        <h2 className="savedTitle">Saved Articles</h2>
        {this.showSaved()}
      </div>
			)
	}
}

export default AccountPage