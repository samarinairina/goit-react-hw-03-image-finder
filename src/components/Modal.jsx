import propTypes from "prop-types";
import ReactModal from "react-modal";

function Modal(props) {
  return (
    <ReactModal
      isOpen={props.isModalOpen}
      onRequestClose={props.whenModalClose}
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
    >
      <div>
        <img src={props.largeImageForModal} alt="" />
      </div>
    </ReactModal>
  );
}
Modal.propTypes = {
  largeImageForModal: propTypes.string,
  whenModalClose: propTypes.func,
  isModalOpen: propTypes.bool,
};
export default Modal;
