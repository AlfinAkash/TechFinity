import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Collapse, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './DSAIndex.css';

const topics = [
  'Array',
  'String',
  'LinkedList',
  'Stack',
  'Queue',
  'Tree',
  'Graph'
];

const DSAIndex = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (topic) => {
    setExpanded((prev) => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  return (
    <Box sx={{ maxWidth: '1100px', margin: '0 auto', py: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#2E7D32', mb: 4 }}>
           Data Structures & Algorithms
        </Typography>

        {topics.map((topic) => (
          <Box key={topic} sx={{ mb: 2 }}>
            <Box
              onClick={() => toggleExpand(topic)}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                backgroundColor: expanded[topic] ? '#f1f8e9' : '#e3f2fd',
                cursor: 'pointer',
                borderRadius: 1,
                transition: '0.3s',
                '&:hover': { backgroundColor: '#c8e6c9' }
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {topic}
              </Typography>
              {expanded[topic] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </Box>

            <Collapse in={expanded[topic]} timeout="auto" unmountOnExit>
              <List component="nav" sx={{ pl: 4, backgroundColor: '#ffffff' }}>
                <ListItem button component={Link} to={`/dsa/${topic.toLowerCase()}/basic`}>
                  <ListItemText primary="Basic" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to={`/dsa/${topic.toLowerCase()}/medium`}>
                  <ListItemText primary="Medium" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to={`/dsa/${topic.toLowerCase()}/hard`}>
                  <ListItemText primary="Hard" />
                </ListItem>
              </List>
            </Collapse>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default DSAIndex;
