import React from 'react';
import styles from '../imageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li className={styles.ImageGalleryItem} key={id}>
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
