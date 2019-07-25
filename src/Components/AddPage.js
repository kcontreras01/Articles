import React, { Component } from 'react';
import axios from 'axios';

class AddPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      headline: "",
      content: "",
      url: '',
      id: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    axios.post(`http://localhost:8080/articles/new/`, {
      headline: this.state.headline,
      content: this.state.content,
      url: this.state.url,
    }).then(res => {
     // console.log(this.state.save_date)
     this.props.sendSaved(res.data);
    })
  }

  render() {
    return (
      <div>
        <h2 className="savedTitle">Create Articles</h2>
        <div className="all">
          <form className="createArticle" onSubmit={this.onSubmit}>

          <div key={Math.random}>
            <div>
              <label className="formLabel">Headline</label>
              <input className="editForm" name="headline" type="text" value={this.state.headline} onChange={this.onChange} />
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
              <input type="submit" className="saveButton" value="SAVE" onClick={this.onSubmit}/>
            </div>

          </form>
          </div>
      </div>
    );
  }

}

export default AddPage