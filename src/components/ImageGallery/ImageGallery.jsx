import ImageGalleryItem from "./ImageGalleryItem";
import propTypes from "prop-types";

function ImageGallery(props) {
  return (
    <ul className="ImageGallery">
      {props.gallery.map((image) => (
        <ImageGalleryItem
          key={image.id}
          url={image.webformatURL}
          largeUrl={image.largeImageURL}
          description={image.tags}
          setImageOnClick={props.onClickGalleryItem}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  gallery: propTypes.array,
  onClickGalleryItem: propTypes.func.isRequired,
};
export default ImageGallery;
