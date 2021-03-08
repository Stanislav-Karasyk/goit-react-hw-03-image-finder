import React from 'react';
import styles from '../imageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, onClick}) => {
  return (
    <li className={styles.ImageGalleryItem} key={id}>
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} onClick={onClick}/>
    </li>
  );
};

export default ImageGalleryItem;
