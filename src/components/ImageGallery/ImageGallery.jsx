import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import clsx from "clsx";

export default function ImageGallery({ images, clickOnImg }) {
  return (
    <ul className={clsx(s.galleryList)}>
      {images.map((image) => (
        <li className={clsx(s.galleryItem)} key={image.id}>
          <ImageCard image={image} clickOnImg={clickOnImg}></ImageCard>
        </li>
      ))}
    </ul>
  );
}
