import { useState } from "react";
import Modal from "react-modal";
import "../assets/styles.css";
import reactCert from "../assets/certficates/react.jpg";
import pythonCert from "../assets/certficates/python.jpg";
import laravelCert from "../assets/certficates/laravel.jpg";
import seoCert from "../assets/certficates/seo.jpg";

Modal.setAppElement("#root");

function Picture() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleCardClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const certs = [
    {
      title: "React JS Essentials",
      src: reactCert,
    },
    {
      title: "Python Essentials",
      src: pythonCert,
    },
    {
      title: "Laravel",
      src: laravelCert,
    },
    {
      title: "Search Engine Optimization",
      src: seoCert,
    },
  ];

  return (
    <>
      <div className="my-6 mt-8">
        <span className="text-zinc-300 text-xs px-2 rounded-md py-1 bg-zinc-700 text-start">
          Certifications
        </span>
      </div>
      <div className="container p-2 mb-4">
        {certs.map((cert, index) => (
          <div
            data-text={cert.title}
            key={index}
            className="glass"
            onClick={() => handleCardClick(cert.src)}
            style={{ "--r": "25" }}
          >
            <img
              src={cert.src}
              alt={cert.title}
              loading="lazy"
              className="h-24 rounded-md object-contain"
            />
          </div>
        ))}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Image Modal"
          className="modal"
          overlayClassName="overlay"
        >
          <img src={modalImage} alt="Modal" className="modal-image" />
        </Modal>
      </div>
    </>
  );
}

export default Picture;
