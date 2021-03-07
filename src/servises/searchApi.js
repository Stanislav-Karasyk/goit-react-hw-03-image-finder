import axios from 'axios';

const key = '20189434-40624adf63a47bf5b286cda72';

const searchApi = ( query = '', page = 1 ) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};
export default searchApi;
