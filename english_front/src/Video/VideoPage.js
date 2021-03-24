import React, { Component } from 'react';
import {
    useParams
  } from "react-router-dom";
import VideoPlayerBox from './VideoPlayerBox'
import MenuBar from '../Common/MenuBar'
class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        const videoScreenWidthPercentage = 8/10;
        const videoScreenHeightPercentage = 7/10;
        this.videoHeight = window.innerHeight*videoScreenHeightPercentage;
        this.videoWidth = window.innerWidth*videoScreenWidthPercentage;
        this.videoId = this.props.match.params.id
      }
    
        
    render() {

        return (
            <div className="video-page-main-div">
                <MenuBar/>
                <VideoPlayerBox videoId={this.videoId} videoHeight={this.videoHeight}/>
            </div>
    );
    }
  }
  export default VideoPage;