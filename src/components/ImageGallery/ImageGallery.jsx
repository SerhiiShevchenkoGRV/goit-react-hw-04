import { useContext } from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import clsx from "clsx";
import { GalleryContext } from "../../providers/GalleryProvider/GalleryProvider";

export default function ImageGallery({ isOpen }) {
  const { images } = useContext(GalleryContext);
  return (
    <ul className={clsx(s.galleryList)}>
      {images.map((image) => (
        <li className={clsx(s.galleryItem)} key={image.id}>
          <ImageCard image={image} isOpen={isOpen}></ImageCard>
        </li>
      ))}
    </ul>
  );
}
