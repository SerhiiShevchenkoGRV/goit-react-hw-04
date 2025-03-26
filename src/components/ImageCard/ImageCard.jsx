import clsx from "clsx";
import s from "./ImageCard.module.css";
import { useContext } from "react";
import { GalleryContext } from "../../providers/GalleryProvider/GalleryProvider";

export default function ImageCard({ image, isOpen }) {
  const {
    alt_description: alt,
    urls: { small },
  } = image;
  const { setSelectedImg } = useContext(GalleryContext);

  const clickOnImg = (e) => {
    console.log(e.target);
    isOpen();
    setSelectedImg({ image });
  };

  return (
    <div className={clsx(s.galleryImgCard)} onClick={clickOnImg}>
      <img className={clsx(s.galleryImg)} src={small} alt={alt} />
    </div>
  );
}
