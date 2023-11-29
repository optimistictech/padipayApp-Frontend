import React from 'react'
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel({ value, labelValue }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
      <LinearProgress variant="determinate" sx={{ height: 10, borderRadius: 5 }} value={value} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {labelValue !== undefined ? `${labelValue}%` : `${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  labelValue: PropTypes.string, // You can change the prop type according to your needs
};

const ProgressBar = ({ labelValue }) => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress >= 100 ? 10 : prevProgress + 10;
        
        // If you want to stop when progress reaches a certain value, modify the condition
        if (nextProgress >= 50) {
          clearInterval(timer);
        }

        return nextProgress;
      });
    }, 800);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      {/* Pass labelValue prop to set a custom label value */}
      <LinearProgressWithLabel value={progress} labelValue={labelValue} />
    </Box>
  );
};

ProgressBar.propTypes = {
  labelValue: PropTypes.string, // You can change the prop type according to your needs
};


export default ProgressBar
