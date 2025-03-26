import clsx from "clsx";
import s from "./LoadMoreBtn.module.css";
import { GalleryContext } from "../../providers/GalleryProvider/GalleryProvider";
import { useContext } from "react";

export default function LoadMoreBtn() {
  const { page, setPage } = useContext(GalleryContext);

  const pageIncrement = () => {
    setPage(page + 1);
    console.log(page);
  };

  return (
    <button onClick={pageIncrement} className={clsx(s.loadMoreBtn)}>
      Load More
    </button>
  );
}
