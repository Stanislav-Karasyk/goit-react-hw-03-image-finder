import React from 'react';
import styles from '../imageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  webformatURL,
  onClick,
  largeImageURL,
  getLargeImage,
}) => {
  const getResult = e => {
    getLargeImage(e);
    onClick();
  };
  return (
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        src={webformatURL}
        alt=""
        className={styles.ImageGalleryItemImage}
        onClick={getResult}
        data-largeimgurl={largeImageURL}
      />
    </li>
  );
};

export default ImageGalleryItem;
