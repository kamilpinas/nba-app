import React from 'react';
import VideosList from '../widgets/VideosList/videosList';

const Videos = () => {
  return (
    <div>
      <VideosList
        type="card"
        loadmore={true}
        title={true}
        start={0}
        amount={6}
      />
    </div>
  );
};

export default Videos;