import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from '../imageGallery/ImageGallery.module.css';

const ImageGallery = ({ pictures, onClick, getLargeImage }) => {
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          id={id}
          webformatURL={webformatURL}
          onClick={onClick}
          largeImageURL={largeImageURL}
          getLargeImage={getLargeImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
