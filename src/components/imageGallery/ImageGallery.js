import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from '../imageGallery/ImageGallery.module.css';

const ImageGallery = ({ pictures }) => {
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map(({ id, webformatURL }) => (
        <ImageGalleryItem id={id} webformatURL={webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
