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
    <Image
      className="rounded shadow-lg"
      alt={alt}
      src={imagePath}
      width={657}
      height={313}
      style={{
        height: '313px',
        width: '657px',
        position: 'unset',
        objectFit: 'cover'
      }}
    />
  );
};

ProjectImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectImg;
