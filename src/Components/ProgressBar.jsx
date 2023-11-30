import React from 'react'
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel({ value, color, imageUrl }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <img src={imageUrl} alt="Icon" style={{ width: 30, height: 30, marginRight: 10 }} />
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{ height: 12, borderRadius: 8, backgroundColor: '#f0f0f0' }}
          style={{ backgroundColor: color }}
          value={value}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const ProgressBar = () => {
  const progressBars = [
    { imageUrl: "https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2056.png?updatedAt=1701256123166", color: '#2196f3', value: 20 },
    { imageUrl: "https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2057.png?updatedAt=1701256150790", value: 40, color: '#4caf50' },
    { imageUrl: "https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2058.png?updatedAt=1701256290827", value: 60, color: '#ff9800' },
    { imageUrl: "https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2059.png?updatedAt=1701256074237", value: 80, color: '#e91e63' },
    { imageUrl: "https://ik.imagekit.io/b6b9xwu9l/CommunityPageImages/Group%2060.png?updatedAt=1701256390901", value: 100, color: '#673ab7' },
  ];

  return (
    <Box>
      {progressBars.map((bar, index) => (
        <LinearProgressWithLabel
          key={index}
          value={bar.value}
          color={bar.color}
          imageUrl={bar.imageUrl}
        />
      ))}
    </Box>
  )
}

export default ProgressBar