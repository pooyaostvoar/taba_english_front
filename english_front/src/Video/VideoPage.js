import React, { Component } from 'react';
import {
    useParams
  } from "react-router-dom";
class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        
      }    
    
    render() {

        return (
            <div className="container">
                this is video {this.props.match.params.id}
            </div>
    );
    }
  }
  export default VideoPage;