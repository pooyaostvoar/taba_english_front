import React, { Component } from 'react';
import {
    useParams
  } from "react-router-dom";
import "../../node_modules/video-react/dist/video-react.css";
import './VideoPlayerBox.css'
import { Player } from 'video-react';
class VideoPlayerBox extends React.Component {
    constructor(props) {
        super(props);
        
      }
        
    render() {

        return (
                <div className="row">
                    <div className="col-sm-11">
                        this is video {this.props.videoId}
                        <Player
                        height={this.props.videoHeight}
                        playsInline fluid={false}
                        playsInline
                        poster="/assets/poster.png"
                        src="http://0.0.0.0:9000/django-backend-dev-private/2021-2-17/20190821_232605.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minioadmin%2F20210323%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210323T174806Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=814c7fcd1d028c0e213c6058cc7653fee62352684192a6a5ada3b22bb2036e83"
                        />
                    </div>
                </div>
    );
    }
  }
  export default VideoPlayerBox;