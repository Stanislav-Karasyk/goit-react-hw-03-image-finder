import React, { Component } from 'react';
import searchApi from '../servises/searchApi';
import styles from './App.module.css';
import Button from './button/Button';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import Searchbar from './searchbar/Searchbar';

class App extends Component {
  state = {
    query: '',
    page: 1,
    pictures: [],
  };

  componentDidMount() {}

  onSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    searchApi(this.state.query)
      .then(pictures => {
        this.setState({
          pictures,
          page: 2,
          showModal: false,
          imgTags: '',
          isLoading: false,
        });
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  onHandleChange = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar
          onSubmit={this.onSubmit}
          onHandleChange={this.onHandleChange}
          query={this.state.query}
        />
        <ImageGallery pictures={this.state.pictures} />
        <Button />
        <Modal />
      </div>
    );
  }
}

export default App;
