import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/styles.css'; // Import the CSS file
import ach1 from '../assets/ach1.jpg';
import ach2 from '../assets/ach2.jpg';
import ach3 from '../assets/ach3.jpg';

Modal.setAppElement('#root'); // Set the app element for accessibility

function Picture() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleCardClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='my-6 mt-8'>
        <span className='text-zinc-300 text-xs px-2 rounded-md py-1 bg-zinc-700 text-start'>Academic Achievements</span>
      </div>
      <div className="container p-2 mb-4">
        <div data-text="3nd-year: VpresLister" style={{ '--r': '-15' }} className="glass" onClick={() => handleCardClick(ach2)}>
          <img src={ach2} alt="Github" className=" h-24 rounded-md object-contain" />
        </div>
        <div data-text="2nd-year: PresLister" style={{ '--r': '5' }} className="glass" onClick={() => handleCardClick(ach3)}>
          <img src={ach3} alt="Code" className=" rounded-md h-24 object-contain" />
        </div>
        <div data-text="Gawad Parangal" style={{ '--r': '25' }} className="glass" onClick={() => handleCardClick(ach1)}>
          <img src={ach1} alt="Earn" className=" h-24 rounded-md object-contain" />
        </div>

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