import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function UrlCard({ data }) {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Typography><strong>Original:</strong> {data.long}</Typography>
        <Typography><strong>Short:</strong> {data.short}</Typography>
        <Typography><strong>Custom:</strong> {data.custom || "Auto-generated"}</Typography>
        <Typography><strong>Expiry:</strong> {data.expiry} minutes</Typography>
        <Typography><strong>Created At:</strong> {data.createdAt}</Typography>
      </CardContent>
    </Card>
  );
}

export default UrlCard;