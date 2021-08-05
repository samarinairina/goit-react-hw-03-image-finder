import propTypes from "prop-types";
function ImageGalleryItem(props) {
  const handleClick = (event) => {
    props.setImageOnClick(event.currentTarget.dataset.url);
  };
  return (
    <li className="ImageGalleryItem">
      <img
        src={props.url}
        alt={props.description}
        className="ImageGalleryItem-image"
        data-url={props.largeUrl}
        onClick={handleClick}
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  url: propTypes.string,
  largeUrl: propTypes.string,
  description: propTypes.string,
  setImageOnClick: propTypes.func.isRequired,
};
export default ImageGalleryItem;
