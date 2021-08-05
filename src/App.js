import Loader from "react-loader-spinner";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar";
import Button from "./components/ImageGallery/Button";
import Modal from "./components/Modal";
import React, { useState, useEffect } from "react";
import { getImage } from "./api/pixabay.js";
import { scroll } from "./js/scroll.js";
import "./style.css";

function App() {
  const [gallery, setGallery] = useState([]);
  const [findQuery, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [largeImageForModal, setImageUrl] = useState("");
  /**
   * This func set in state keyword for find image
   * @param {String} query - keyword for to find images
   */
  const handleGetQuery = (query) => {
    setQuery(query);
  };

  /**
   * Function increment currentPage on 1
   */
  const hanbleGetMore = () => {
    setCurrentPage((prevState) => prevState + 1);
  };
  /**
   * This func set in state URL of large image
   * @param {string} url - URL of large image
   */
  const setImageForModal = (url) => {
    setImageUrl(url);
  };
  /**
   * This func delete in state URL of large image. This fucn controls opening modal window
   */
  const modalCloser = () => {
    setImageUrl("");
  };
  useEffect(() => {
    setLoading(true);
    getImage(findQuery, currentPage)
      .then(({ hits }) => setGallery(hits))
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (currentPage !== 1) {
      setLoading(true);
      getImage(findQuery, currentPage)
        .then(({ hits }) => {
          setGallery((prevState) => [...prevState, ...hits]);
          scroll();
        })
        .catch((error) => alert(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }, [currentPage]);

  useEffect(() => {
    setLoading(true);
    getImage(findQuery, 1)
      .then(({ hits }) => setGallery(hits))
      .catch((error) => alert(error))
      .finally(() => {
        setLoading(false);
      });
  }, [findQuery]);

  return (
    <>
      <div className="wrapperApp">
        <Searchbar onSubmit={handleGetQuery} />
        <ImageGallery gallery={gallery} onClickGalleryItem={setImageForModal} />
        {isLoading && (
          <>
            <Loader
              className="loader"
              type="Puff"
              color="#FFBFFF"
              height={50}
              width={50}
            />
          </>
        )}
        {gallery.length !== 0 && <Button onClick={hanbleGetMore} />}
        <Modal
          whenModalClose={modalCloser}
          isModalOpen={largeImageForModal !== "" ? true : false}
          largeImageForModal={largeImageForModal}
        />
      </div>
    </>
  );
}

export default App;
