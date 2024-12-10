import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import {
  fetchImages,
  setPage,
  setCategory,
  setSelectedImage,
  toggleCategoryModal,
} from "./store/slices/imagesSlice";
import { Image } from "./store/slices/imagesSlice";
import Button from "./utils/Button";
import ImageGrid from "./utils/ImageGrid";
import ImageModal from "./utils/ImageModal";
import CategorySelector from "./utils/CategorySelector";

const App: React.FC = () => {
  // Access Redux state values
  const {
    images,
    loading,
    error,
    category,
    page,
    selectedImage,
    categoryModalOpen,
  } = useSelector((state: RootState) => state.images);

  // Get the dispatch function to trigger actions
  const dispatch: AppDispatch = useDispatch();

  // Fetch images whenever the category or page changes
  useEffect(() => {
    dispatch(fetchImages()); // Fetch images from API
  }, [category, page, dispatch]);

  // Go to the next page
  const nextPage = () => {
    dispatch(setPage(page + 1)); // Update state to the next page
  };

  // Go to the previous page
  const prevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1)); // Update state to the previous page
    }
  };

  // Open the category selection modal
  const openCategoryModal = () => {
    dispatch(toggleCategoryModal());
  };

  // Close the category selection modal
  const closeCategoryModal = () => {
    dispatch(toggleCategoryModal());
  };

  // Change the current category and close the modal
  const selectCategory = (newCategory: string) => {
    dispatch(setCategory(newCategory)); // Update category
    dispatch(toggleCategoryModal()); // Close the modal
  };

  // Open the image details modal
  const openModal = (image: Image) => {
    dispatch(setSelectedImage(image)); // Set the selected image in the state
  };

  // Close the image details modal
  const closeModal = () => {
    dispatch(setSelectedImage(null)); // Clear the selected image
  };

  return (
    <div
      style={{
        backgroundColor: "#fafafa", // Light background for the whole app
        minHeight: "100vh", // Ensure it covers the full viewport
        padding: "20px",
        fontFamily: "Arial, sans-serif", // Clean font style
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333", // Neutral color for text
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        Image Gallery
      </h1>
      {/* Display loading or error messages */}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* Top control bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          marginBottom: "20px",
          backgroundColor: "#f4f4f4",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Prev button */}
        <Button onClick={prevPage} disabled={page === 1}>
          Prev
        </Button>

        {/* Change Category Button */}
        <button
          onClick={openCategoryModal}
          style={{
            padding: "10px 20px",
            backgroundColor: "#D4E157",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#66bb6a")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#D4E157")
          }
        >
          Change Category
        </button>

        {/* Next button */}
        <Button onClick={nextPage}>Next</Button>
      </div>

      {/* Images grid */}
      <ImageGrid images={images} onImageClick={openModal} />

      {/* Image modal */}
      <ImageModal selectedImage={selectedImage} onClose={closeModal} />

      {/* Category Selection Modal */}
      <CategorySelector
        isOpen={categoryModalOpen}
        onClose={closeCategoryModal}
        onSelectCategory={(newCategory: string) => {
          selectCategory(newCategory); // Update category and close modal
        }}
        currentCategory={category} // Pass the current category from Redux state
      />
    </div>
  );
};

export default App;
