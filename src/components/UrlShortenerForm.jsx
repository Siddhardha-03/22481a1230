import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Fade,
  Box,
} from "@mui/material";
import UrlCard from "./UrlCard";

const UrlShortenerForm = () => {
  const [urls, setUrls] = useState([{ long: "", custom: "", expiry: "" }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleSubmit = () => {
    const newResults = urls.map((u) => ({
      ...u,
      short: `short.ly/${u.custom || Math.random().toString(36).slice(2, 8)}`,
      createdAt: new Date().toLocaleString(),
    }));
    setResults(newResults);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #e0f7fa, #f9fbe7)",
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Fade in timeout={600}>
          <Card elevation={4}>
            <CardContent>
              <Typography variant="h4" gutterBottom textAlign="center">
                ✂️ Elegant URL Shortener
              </Typography>
              <Grid container spacing={3}>
                {urls.map((u, i) => (
                  <Grid item xs={12} key={i}>
                    <TextField
                      fullWidth
                      label="Long URL"
                      variant="outlined"
                      value={u.long}
                      onChange={(e) => handleChange(i, "long", e.target.value)}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Custom Shortcode"
                      variant="outlined"
                      value={u.custom}
                      onChange={(e) =>
                        handleChange(i, "custom", e.target.value)
                      }
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Expiry (mins)"
                      type="number"
                      variant="outlined"
                      value={u.expiry}
                      onChange={(e) =>
                        handleChange(i, "expiry", e.target.value)
                      }
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box textAlign="center" mt={4}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                  sx={{
                    px: 4,
                    py: 1.5,
                    backgroundColor: "#00897b",
                    ":hover": {
                      backgroundColor: "#00695c",
                    },
                  }}
                >
                  Generate Short URLs
                </Button>
              </Box>

              {results.length > 0 && (
                <Box mt={5}>
                  <Typography variant="h5" textAlign="center">
                    🎉 Here's your collection:
                  </Typography>
                  {results.map((r, idx) => (
                    <UrlCard key={idx} data={r} />
                  ))}
                </Box>
              )}
            </CardContent>
          </Card>
        </Fade>
      </Container>
    </Box>
  );
};

export default UrlShortenerForm;