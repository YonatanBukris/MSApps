import React from "react";
import Modal from "react-modal";
import { Image } from "../store/slices/imagesSlice";

interface ImageModalProps {
  selectedImage: Image | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ selectedImage, onClose }) => {
  return (
    <Modal
      isOpen={!!selectedImage}
      onRequestClose={onClose}
      contentLabel="Image Details"
      style={{
        content: {
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
        },
      }}
    >
      {selectedImage && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ margin: "10px 0" }}>Image Details</h2>
          <img
            src={selectedImage.previewURL}
            alt={`Image ID ${selectedImage.id}`}
            style={{
              maxWidth: "100%",
              maxHeight: "60vh",
              objectFit: "contain",
              borderRadius: "5px",
            }}
          />
          <p>Views: {selectedImage.views}</p>
          <p>Downloads: {selectedImage.downloads}</p>
          <p>Collections: {selectedImage.collections}</p>
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px",
              marginTop: "10px",
              backgroundColor: "#ff6f61",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            Close
          </button>
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
