"use client"

import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

export default function YoutubeEmbeddedVideo({ url }) {

  // extract the last path component from the shortened url 
  // if url has this format: https://www.youtube.com/watch?v=videoId

  var videoId = url.split('v=')[1] ?? url.split('/').pop();
  console.log("videoId: " + videoId)

  // extract the first query param from the shortened url
  // if url has this format: https://youtu.be/videoId?list=playlistId
  if (videoId.indexOf('?') > 0) {
    videoId = videoId.split('?')[0];
  }


  return(
    <LiteYouTubeEmbed 
        id={videoId}
        title="YouTube video player"
    />
  )
}
