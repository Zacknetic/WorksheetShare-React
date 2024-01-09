import React from 'react';

const ImageViewer = ({ element }) => {
    const { base, transformation, urlContent } = element;
    const imageUrl = urlContent ? `http://192.168.50.12:8080${urlContent}` : null;

    const imageStyles = {
        position: 'absolute',
        left: `${transformation.x_coordinate}px`,
        top: `${transformation.y_coordinate}px`,
        width: `${transformation.width}px`,
        height: `${transformation.height}px`,
        transform: `rotate(${transformation.rotation}deg)`,
        zIndex: transformation.z_index
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {imageUrl && <img src={imageUrl} alt={base.name} style={imageStyles} />}
        </div>
    );
};

export default ImageViewer;
