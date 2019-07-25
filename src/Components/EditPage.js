import React, { Component } from 'react';
import axios from 'axios';

class EditPage extends Component {
  constructor(props){
    super(props);

    this.state = {
    	id: "",
      headline: "",
      content: "",
      url: '',
    }

    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(prevProps){
  	// console.log('did mount', this.props.editArr);
  	if (prevProps.editArr.headline !== this.props.editArr.headline) {
  		this.setState({
  			id: this.props.editArr.id,
	  		headline: this.props.editArr.headline,
	  		content: this.props.editArr.content,
	  		url: this.props.editArr.url
  		});
  	}
  }

	handleChange(event) {
		event.preventDefault();
		this.setState({
			value: event.target.value
		})
	}  

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(id) {
  	// console.log('the id is: ',id)
    axios.put(`http://localhost:8080/articles/${id}`, {
      headline: this.state.headline,
      content: this.state.content,
      web_url: this.state.url,
    }).then(res => {
     this.props.sendSaved(res.data);
     // console.log('put success');
    })
  }

  render() {
    return (
      <div>
        <h2 className="savedTitle">Edit Articles</h2>
        <div className="all">
          <form className="createArticle">

          <div key={Math.random}>
            <div>
              <label className="formLabel">Headline</label>
              <input className="editForm" name="headline" type="text" value={this.state.headline} onChange={this.onChange}/>
            </div>

            <div>
              <label className="formLabel">Content</label>
              <input className="editForm" name="content" type="text" value={this.state.content} onChange={this.onChange} />
            </div>

            <div>
              <label className="formLabel">URL</label>
              <input className="editForm" name="url" type="text" value={this.state.url} onChange={this.onChange} />
            </div>            
          </div>
            <div>
              <input type="submit" className="saveButton" value="SAVE" onClick={(e) => {e.preventDefault(); this.onSubmit(this.state.id)}}/>
            </div>

          </form>
          </div>
      </div>
    );
  }

}

export default EditPage