import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the type for an Image
export interface Image {
  id: number;
  previewURL: string;
  views: number;
  downloads: number;
  collections: number;
}

// Define the state for images
interface ImagesState {
  images: Image[];
  category: string;
  page: number;
  loading: boolean;
  error: string | null;
  selectedImage: Image | null;
  categoryModalOpen: boolean;
}

// Initial state
const initialState: ImagesState = {
  images: [],
  category: "nature",
  page: 1,
  loading: false,
  error: null,
  selectedImage: null,
  categoryModalOpen: false,
};

// Async function to fetch images from the API
export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (_, { getState }) => {
    const state = getState() as { images: ImagesState };
    const { category, page } = state.images;

    const response = await axios.get(
      `http://localhost:5000/api/images?category=${category}&page=${page}`
    );
    return response.data.data; // Return images from API response
  }
);

// Redux slice for managing images
const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload; // Update the category
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload; // Update the page number
    },
    setSelectedImage: (state, action: PayloadAction<Image | null>) => {
      state.selectedImage = action.payload; // Set the selected image
    },
    toggleCategoryModal: (state) => {
      state.categoryModalOpen = !state.categoryModalOpen; // Toggle category modal
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true; // Set loading state
        state.error = null; // Clear any previous errors
      })
      .addCase(fetchImages.fulfilled, (state, action: PayloadAction<Image[]>) => {
        state.loading = false; // Clear loading state
        state.images = action.payload; // Store fetched images
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false; // Clear loading state
        state.error = action.error.message || "Failed to fetch images"; // Store error
      });
  },
});

export const { setCategory, setPage, setSelectedImage, toggleCategoryModal } =
  imagesSlice.actions;
export default imagesSlice.reducer;
