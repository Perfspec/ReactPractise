import React, { Component } from 'react';
import axios from 'axios';
var preUrl = 'http://www.omdbapi.com/?apikey=YOUR-KEY-HERE&t=';


class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      Title: 'Game of Thrones',
      Year: '2011–',
      Released: '17 Apr 2011',
      Genre: 'Action, Adventure, Drama, Fantasy, Romance',
      Director: 'N/A',
      Writer: 'David Benioff, D.B. Weiss',
      Actors: 'Peter Dinklage, Lena Headey, Emilia Clarke, Kit Harington',
      Plot:
       'Nine noble families fight for control over the mythical lands of Westeros, while an ancient enemy returns after being dormant for thousands of years.',
      Language: 'English',
      Country: 'USA, UK',
      Awards: 'Won 1 Golden Globe. Another 273 wins & 454 nominations.',
      Poster:
       'https://m.media-amazon.com/images/M/MV5BMjE3NTQ1NDg1Ml5BMl5BanBnXkFtZTgwNzY2NDA0MjI@._V1_SX300.jpg',
      imdbRating: '9.5',
      imdbVotes: '1,361,235',
      Type: 'series'
  }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    axios.get(preUrl+this.state.value).then(response => this.setState({
      Title: response.data.Title,
      Year: response.data.Year,
      Released: response.data.Released,
      Genre: response.data.Genre,
      Director: response.data.Director,
      Writer: response.data.Writer,
      Actors: response.data.Actors,
      Plot: response.data.Plot,
      Language: response.data.Language,
      Country: response.data.Country,
      Awards: response.data.Awards,
      Poster: response.data.Poster,
      imdbRating: response.data.imdbRating,
      imdbVotes: response.data.imdbVotes,
      Type: response.data.Type}));
  }

handleSubmit(event) {
  alert('A name was submitted: ' + this.state.value);
  event.preventDefault();
}

render() {
  return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
    </form>
    <img src={this.state.Poster} alt="Movie Poster"/>
    <table>
      <tr>{this.state.Title}</tr>
      <tr>{this.state.Year}</tr>
      <tr>{this.state.Released}</tr>
      <tr>{this.state.Genre}</tr>
      <tr>{this.state.Director}</tr>
      <tr>{this.state.Writer}</tr>
      <tr>{this.state.Actors}</tr>
      <tr>{this.state.Plot}</tr>
      <tr>{this.state.Language}</tr>
      <tr>{this.state.Country}</tr>
      <tr>{this.state.Awards}</tr>
      <tr>{this.state.imdbRating}</tr>
      <tr>{this.state.imdbVotes}</tr>
      <tr>{this.state.Type}</tr>
    </table>
    </div>
  );
}
}

export default NameForm;
