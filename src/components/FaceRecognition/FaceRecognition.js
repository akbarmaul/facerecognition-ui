import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="center ma1">
            <div className="absolute  mt4 mb4">
                <img id="inputImage" src={imageUrl} alt="" width="500px"  height="auto"/>
                <div className="bounding_box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;