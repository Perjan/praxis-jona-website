"use client"

import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function YoutubeEmbeddedVideo({ url }) {

  // extract the last path component from the url
  const videoId = url.split('/').pop();

  return(
    <LiteYouTubeEmbed 
        id={videoId}
        title="YouTube video player"
    />
  )
}
