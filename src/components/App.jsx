import SearchBar from "./SearchBar/SearchBar";
import ImageModal from "./ImageModal/ImageModal";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

import { useContext, useEffect } from "react";
import { GalleryContext } from "../providers/GalleryProvider/GalleryProvider";
import { fetchImagesByQuery } from "../services/api";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function App() {
  const {
    userQuery,
    setUserQuery,
    images,
    setImages,
    topLoader,
    setTopLoader,
    bottomLoader,
    setBottomLoader,
    isError,
    setIsError,
    errorMessage,
    setErrorMessage,
    modalIsOpen,
    setIsOpen,
    color,
    page,
    setPage,
    totalPages,
    setTotalPages,
    isFirstRender,
    setIsFirstRender,
  } = useContext(GalleryContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!userQuery) return;
    const fetchImages = async () => {
      try {
        setIsFirstRender(false);
        setIsError(false);
        setTopLoader(true);
        setBottomLoader(true);
        const { results, total_pages } = await fetchImagesByQuery(
          userQuery,
          page
        );
        setImages((prev) => [...prev, ...results]);
        console.log(results);
        console.log(total_pages);
        setTotalPages(total_pages);
      } catch (error) {
        setIsError(true);
        console.log(error.message);
        setErrorMessage(error.message);
      } finally {
        setTopLoader(false);
        setBottomLoader(false);
      }
    };
    fetchImages();
  }, [userQuery, page]);

  const handleSubmit = (newQuery) => {
    console.log(newQuery);
    setUserQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <div className="appCont">
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      {isFirstRender && topLoader && <PropagateLoader color={color} />}
      {(isError && <ErrorMessage errorMessage={errorMessage}></ErrorMessage>) ||
        (images.length > 0 && <ImageGallery isOpen={openModal}></ImageGallery>)}
      {(!isFirstRender && bottomLoader && (
        <PropagateLoader className="loader" color={color} />
      )) ||
        (images.length > 0 && page < totalPages && !isError && (
          <LoadMoreBtn></LoadMoreBtn>
        ))}
      {modalIsOpen && (
        <ImageModal isOpen={openModal} onClose={closeModal}></ImageModal>
      )}
    </div>
  );
}
