import React from 'react';
import "./Cover.css";
import coverVideo from "../../assets/cover-video.mp4";

export function Cover() {
    return (
        <div className='cover__container'>
            <video className='video' src={coverVideo} autoPlay loop muted></video>
            <h1 className='cover__h1'>Rita Ora</h1>
            <p className='cover__p'>Tattoo Artist | Designer | Fresh Styling | Content Creator</p>
        </div>
    )
}