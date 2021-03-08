import React from 'react';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import styles from '../imageGallery/ImageGallery.module.css';

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {pictures.map(({ id, webformatURL }) => (
        <ImageGalleryItem id={id} webformatURL={webformatURL} onClick={onClick}/>
      ))}
    </ul>
  );
};

export default ImageGallery;
