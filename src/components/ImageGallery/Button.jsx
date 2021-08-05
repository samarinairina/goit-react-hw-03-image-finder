import propTypes from "prop-types";

function Button(props) {
  return (
    <button className="Button" onClick={props.onClick}>
      load more
    </button>
  );
}
Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
export default Button;
