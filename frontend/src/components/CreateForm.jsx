import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const createProduct = async ({ name, price, image }) => {
  const product = {
    name: name,
    price: price,
    image: image,
  };
  try {
    console.log("hello this is working");
    const res = await axios.post("http://localhost:5000/api/products", {
      product: product,
    });
    console.log(res.data); // Log the response for debugging
    return true; // Indicate success
  } catch (error) {
    console.error("Error creating product:", error);
    return false; // Indicate failure
  }
};

const CreateForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    const isSuccess = await createProduct({ name, price, image });
    if (isSuccess) {
      navigate("/"); // Redirect to the Feed page on success
    } else {
      alert("Failed to create product. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        background: "#800020",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name">Name:</label>
        <br />
        <br />
        <TextField
          id="name"
          variant="filled"
          color="success"
          focused
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name state
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor="price">Price:</label>
        <br />
        <br />
        <TextField
          id="price"
          variant="filled"
          color="success"
          focused
          value={price}
          onChange={(e) => setPrice(e.target.value)} // Update price state
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor="image">Image:</label>
        <br />
        <br />
        <TextField
          id="image"
          variant="filled"
          color="success"
          focused
          value={image}
          onChange={(e) => setImage(e.target.value)} // Update image state
          autoComplete="off"
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreateForm;
