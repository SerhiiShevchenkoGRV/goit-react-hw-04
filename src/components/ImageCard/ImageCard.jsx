import clsx from "clsx";
import s from "./ImageCard.module.css";

export default function ImageCard({ image, clickOnImg }) {
  const {
    alt_description: alt,
    urls: { small },
  } = image;

  return (
    <div className={clsx(s.galleryImgCard)}>
      <img
        onClick={() => {
          clickOnImg(image);
        }}
        className={clsx(s.galleryImg)}
        src={small}
        alt={alt}
      />
    </div>
  );
}
