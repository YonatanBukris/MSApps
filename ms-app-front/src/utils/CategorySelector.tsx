import React from "react";
import Modal from "react-modal";

interface CategorySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
  currentCategory: string; // Current selected category
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  currentCategory,
}) => {
  const categories = ["nature", "sports", "animals", "technology"];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select Category"
      style={{
        content: {
          maxWidth: "500px",
          margin: "auto",
          padding: "20px",
          textAlign: "center",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <h2>Select a Category</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((category) => (
          <li
            key={category}
            style={{
              margin: "10px 0",
              cursor: "pointer",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor:
                currentCategory === category ? "#D4E157   " : "transparent", // Highlight active category
              color: currentCategory === category ? "white" : "#333", // White text for active category
              fontWeight: currentCategory === category ? "bold" : "normal", // Bold text for active category
              boxShadow:
                currentCategory === category
                  ? "0px 2px 6px rgba(0, 128, 0, 0.3)" // Slight shadow for active category
                  : "0px 2px 4px rgba(0, 0, 0, 0.1)", // Default shadow
              transition: "all 0.2s", // Smooth transition
              textAlign: "center",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <button
        onClick={onClose}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          backgroundColor: "#ff6f61",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#ff8a73")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ff6f61")
        }
      >
        Close
      </button>
    </Modal>
  );
};

export default CategorySelector;
