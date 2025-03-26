import clsx from "clsx";
import s from "./ImageModal.module.css";
import Modal from "react-modal";
import { useContext } from "react";
import { GalleryContext } from "../../providers/GalleryProvider/GalleryProvider";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({ isOpen, onClose }) {
  const { selectedImg } = useContext(GalleryContext);
  const { image } = selectedImg;
  const {
    alt_description: alt,
    created_at: date,
    likes,
    urls,
    user: author,
  } = image;
  const { regular } = urls;
  const { instagram_username: insta, links, location, name } = author;
  const { html, portfolio, self } = links;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Simple modal"
      className={clsx(s.modal)}
      overlayClassName={clsx(s.modalOverlay)}
    >
      <div className={clsx(s.modalImgCont)}>
        <img className={clsx(s.modalImg)} src={regular} alt={alt} />
        <div className={clsx(s.modalImgInfo)}>
          <a
            className={clsx(s.userLink)}
            href={html}
            target="_blank"
            rel="noopener noreferrer"
          >
            Author: {name}
          </a>
          <a
            className={clsx(s.userLink)}
            href={`https://www.instagram.com/${insta}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <p className={clsx(s.imageInfo)}>Likes: {likes}</p>
          <p className={clsx(s.imageInfo)}>Location: {location}</p>
          <p className={clsx(s.imageInfo)}>Created at: {date.split("T")[0]}</p>
        </div>
      </div>
    </Modal>
  );
}
