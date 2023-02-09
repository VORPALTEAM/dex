import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'


const VideoModal = () => {

    return(
        <div className="modal--window video--frame">
            <iframe title="Vorpal teaser" 
            allow="autoplay; fullscreen; picture-in-picture" allowFullScreen
            src="https://player.vimeo.com/video/679737073?h=b4b8707b6a" style={{
                width: '100%',
                height: '100%'
            }} />
        </div>
    )
}

export default VideoModal

