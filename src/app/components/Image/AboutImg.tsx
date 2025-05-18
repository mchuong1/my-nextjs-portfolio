import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const AboutImg = ({ filename, alt } : { filename: string, alt: string }) => {
  const [imagePath, setImagePath] = React.useState('');

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
  
    fetch(`/api/images?filename=${filename}`, { signal })
      .then(response => response.json())
      .then(data => {
        if (!signal.aborted) {
          setImagePath(data.imagePath);
        }
      })
      .catch((error) => {
        console.error('Error fetching image:', error)
      });
  
    return () => {
      controller.abort();
    };
  }, [filename]);

  return (
    {imagePath ? (
      <Image
        className="rounded shadow-lg"
        alt={alt}
        src={imagePath}
        width={350}
        height={263}
        style={{
          height: '263px',
          width: '350px',
          position: 'unset',
          objectFit: 'cover'
        }}
      />
    ) : null}
  );
};

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
