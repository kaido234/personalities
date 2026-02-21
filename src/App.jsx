import { useState } from 'react';
import { personalities } from './data';

// MUI Components
import {
  Box,
  Typography,
  Paper,
  CardMedia,
  Button,
  IconButton,
  Collapse
} from '@mui/material';

// MUI Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const currentPerson = personalities[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % personalities.length);
    setExpanded(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? personalities.length - 1 : prevIndex - 1
    );
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', pt: 5, px: 2, maxWidth: 900, mx: 'auto' }}>
      
      
      <Paper elevation={0} sx={{ width: '100%', maxWidth: 800, p: 4, border: '1px solid #e0e0e0', borderRadius: 1 }}>

        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h5" component="h1" fontWeight="normal" sx={{ mb: 0.5 }}>
            SOFTWARE DEVELOPERS
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Isip Dave Vincent - C-PEITEL3
          </Typography>
        </Box>

        {}
        <Box sx={{ mb: 4 }}>
          <Button onClick={handlePrev} variant="contained" size="medium" sx={{ mr: 2, minWidth: '90px' }}>
            BACK
          </Button>
          <Button onClick={handleNext} variant="contained" size="medium" sx={{ minWidth: '90px' }}>
            NEXT
          </Button>
        </Box>

        
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <CardMedia
            component="img"
            image={currentPerson.image}
            alt={currentPerson.name}
            sx={{ width: 280, height: 280, objectFit: 'cover' }} 
          />
        </Box>

        
        <Box sx={{ mb: 1 }}>
          <Typography variant="h4" component="h2" sx={{ mb: 1, fontWeight: 'normal' }}>
            {currentPerson.name}
          </Typography>
          <Typography variant="h6" color="text.primary" sx={{ fontWeight: 'normal' }}>
            {currentIndex + 1} of {personalities.length}
          </Typography>
        </Box>

        
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Box sx={{ mt: 2, mb: 1 }}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {currentPerson.description}
              </Typography>
            </Box>
          </Collapse>

          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: expanded ? 1 : 0 }}>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{ 
                transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s'
              }}
            >
              <ExpandMoreIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>

      </Paper>
    </Box>
  );
}

export default App;