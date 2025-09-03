import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

function StatsPage() {
  const mockData = [
    {
      short: "short.ly/abc123",
      createdAt: "2025-08-05 13:20",
      expiry: "60",
      clicks: 5,
      logs: [
        { time: "13:25", source: "Twitter", location: "India" },
        { time: "13:28", source: "Direct", location: "USA" },
      ],
    },
  ];

  return (
    <Box p={4}>
      <Typography variant="h4">Statistics</Typography>
      {mockData.map((entry, i) => (
        <Box key={i} mt={3}>
          <Typography><strong>Short URL:</strong> {entry.short}</Typography>
          <Typography>Created: {entry.createdAt}</Typography>
          <Typography>Expiry: {entry.expiry} mins</Typography>
          <Typography>Total Clicks: {entry.clicks}</Typography>
          <List>
            {entry.logs.map((log, j) => (
              <ListItem key={j}>
                <Typography>{log.time} - {log.source} - {log.location}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
}

export default StatsPage;