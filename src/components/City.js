import React, { Component } from 'react';

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({text: e.target.value});
    this.props.getCityName(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.getNewCity();
    this.setState({text: ''})
    this.props.cleanInput();
  }
  render() {
    let input;
    return (
      <div className="city">
        <span>{this.props.city}</span>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} onChange={this.handleChange} type="text" placeholder="Search a new city" ref={node => {input = node}}/>
        </form>
      </div>
    );
  }
}

export default City;
