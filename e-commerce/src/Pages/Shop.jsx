import { useQuery } from "@tanstack/react-query";
import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Paper,
  Button,
  Chip
} from "@mui/material";
import { NavLink } from "react-router";
import FetchProduct from "../Services/FetchProduct";
import { useContext, useState } from "react";
import ProductContext from "../Context/ProductContext";
import { useNavigate } from "react-router";

const Shop = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: FetchProduct,
  });

  const navigate = useNavigate();
  const { addToCart } = useContext(ProductContext);

  const products = data?.products || [];

  // ✅ Get unique categories
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Filter products by category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography color="error">
          Failed to load products: {error?.message || "Something went wrong"}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Typography variant="h3" sx={{ fontWeight: 600 }} align="center" gutterBottom>
        Shop Our Products
      </Typography>

      {/* ✅ Category Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            clickable
            onClick={() => setSelectedCategory(cat)}
            sx={{
              px: 2,
              py: 1,
              fontWeight: "bold",
              borderRadius: "20px",
              backgroundColor:
                selectedCategory === cat ? "#2563EB" : "#E5E7EB",
              color: selectedCategory === cat ? "#fff" : "#333",
              "&:hover": {
                backgroundColor:
                  selectedCategory === cat ? "#1E40AF" : "#d1d5db",
              },
              transition: "0.3s",
            }}
          />
        ))}
      </Box>

      {/* ✅ Products Grid */}
      <Grid container justifyContent="center" spacing={3}>
        {filteredProducts.map((product) => (
          <Grid
            sx={{
              height: "461px",
              minHeight: "360px",
              overflow: "hidden",
              boxShadow: `
                0 0 25px rgba(255,255,255,0.7),
                0 2px 8px rgba(0,0,0,0.15)      
              `,
              width: "432px",
              borderRadius: "13px",
              border: "1px solid #E0DDDDFF",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-10px)",
              },
            }}
            key={product.id}
          >
            <Paper
              sx={{
                minWidth: "360px",
                height: "461px",
                background: "#fff",
              }}
              elevation={1}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail}
                alt={product.title}
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                  bgcolor: "#F7F7F7",
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography sx={{ fontWeight: 600 }} variant="h6" component="div">
                  {product.title.slice(0, 36)}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Category: {product.category}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginY: 1 }}
                >
                  {product.description.slice(0, 101)}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#E74C3C", fontWeight: "bold" }}
                >
                  ${product.price}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex", mt: 4 }}>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "#2563EB",
                    "&:hover": {
                      bgcolor: "#1E40AF",
                      transform: "scale(1.03)",
                    },
                    fontWeight: "bold",
                    borderRadius: "7px",
                    fontSize: "14.6px",
                    width: "233px",
                    height: "40px",
                    color: "white",
                    px: 2.7,
                    ml: 1.3,
                    mr: 1,
                    py: 1,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    textTransform: "none",
                    transition: "0.3s",
                  }}
                  onClick={() => {
                    addToCart(product);
                    navigate("/oderSummary");
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    bgcolor: "#27AE60",
                    "&:hover": {
                      bgcolor: "#219150",
                      transform: "scale(1.03)",
                    },
                    border: "none",
                    fontWeight: "bold",
                    fontSize: "13.6px",
                    borderRadius: "7px",
                    width: "233px",
                    height: "40px",
                    px: 3,
                    mr: 1,
                    ml: 1.3,
                    py: 1,
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    textTransform: "none",
                  }}
                >
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    to={`/product/${product.id}`}
                  >
                    View Details
                  </NavLink>
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shop;
