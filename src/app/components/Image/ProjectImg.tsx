import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectImg = ({ filename, alt } : { filename: string, alt: string }) => {
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

  /**
   * TODO: Fix Project size
   * it needs to be dynamic and resizable according to window size
   */

  return (
    <>
    {imagePath ? (
      <Image
        className="rounded shadow-lg project-image"
        alt={alt}
        src={imagePath}
        width={1200}
        height={675}
        style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
          objectFit: 'cover',
          maxWidth: '100%'
        }}
      />
    ) : null}
      </>
  );
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
