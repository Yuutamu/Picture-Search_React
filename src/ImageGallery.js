import React from 'react';
import "./ImageGallery.css";

const ImageGallery = ({ fetchData }) => {
  return (
    <div className='images-wrapper'>
        {fetchData.map((data) => (
          <div className='image' key={data.id} >
            <a href={data.pageURL} target='_blank'>
              <img 
                src={data.largeImageURL} // 開発メモ（消す）：data.hits.largeImageURL とは書かない。hits は、プロパティ
                alt='pixabay.com/photos' 
              />

            </a>

            {/* CSS未調整 URL */}
            <p>{data.pageURL}</p> 
          </div>
        ))}
      
    </div>
  );
};

export default ImageGallery;
