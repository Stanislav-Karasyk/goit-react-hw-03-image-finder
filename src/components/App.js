import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
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
    showModal: false,
    isLoading: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevState) {
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  searchImages = () => {
    this.setState({ isLoading: true });
    searchApi(this.state.query, this.state.page)
      .then(pictures => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    searchApi(this.state.query)
      .then(pictures => {
        this.setState({
          pictures,
          page: 2,
        });
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  onHandleChange = e => {
    const { value } = e.target;
    this.setState({ query: value });
  };

  getLargeImage = (largeImageURL) => {
    this.setState({
      largeImageURL: largeImageURL,
    });
  }

  render() {
    const { showModal, isLoading, largeImageURL } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar
          onSubmit={this.onSubmit}
          onHandleChange={this.onHandleChange}
          query={this.state.query}
        />
        <ImageGallery
          pictures={this.state.pictures}
          onClick={this.toggleModal}
          largeImageURL={this.getLargeImage}
        />

        {isLoading ? (
          <Loader />
        ) : (
          this.state.page !== 1 && <Button onClick={this.searchImages} />
        )}

        {showModal && (
            <Modal onClose={this.toggleModal}>
                <img src={largeImageURL} alt="" />
            </Modal>
        )}
      </div>
    );
  }
}

export default App;
