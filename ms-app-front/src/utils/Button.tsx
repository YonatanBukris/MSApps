import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        backgroundColor: disabled ? "#d3d3d3" : "#ff6f61",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: disabled ? "not-allowed" : "pointer",
        fontWeight: "bold",
        transition: "background-color 0.3s",
        ...(style || {}),
      }}
      onMouseEnter={(e) =>
        !disabled && (e.currentTarget.style.backgroundColor = "#ff8a73")
      }
      onMouseLeave={(e) =>
        !disabled && (e.currentTarget.style.backgroundColor = "#ff6f61")
      }
    >
      {children}
    </button>
  );
};

export default Button;
