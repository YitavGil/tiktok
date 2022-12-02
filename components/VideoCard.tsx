import React from 'react';
import { Video } from '../types';
import { NextPage } from 'next';

interface IPorps {
  post: Video;
}

const VideoCard: NextPage<IPorps> = ({ post }) => {
  return (
    <div>VideoCard</div>
  )
}

export default VideoCard