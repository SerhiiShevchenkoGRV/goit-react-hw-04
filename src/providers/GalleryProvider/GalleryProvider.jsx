import { createContext, useState } from "react";

export const GalleryContext = createContext();
export const GalleryProvider = ({ children }) => {
  const [userQuery, setUserQuery] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImg, setSelectedImg] = useState({});

  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [topLoader, setTopLoader] = useState(false);
  const [bottomLoader, setBottomLoader] = useState(false);
  const [color, setColor] = useState("#ED3B44");
  const [isFirstRender, setIsFirstRender] = useState(true);

  const contextData = {
    userQuery,
    setUserQuery,
    selectedImg,
    setSelectedImg,
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
    setColor,
    page,
    setPage,
    totalPages,
    setTotalPages,
    isFirstRender,
    setIsFirstRender,
  };

  return (
    <GalleryContext.Provider value={contextData}>
      {children}
    </GalleryContext.Provider>
  );
};
