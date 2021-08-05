import axios from "axios";

const USER_KEY = "21975280-7a157b064e0c46621c8cd5d61";
/**
 *
 * @param {string} query - keyword for to find images
 * @param {number} pageNumber - the number page on pixabay
 */
export const getImage = (query, pageNumber) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${pageNumber}&key=${USER_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data);
};
