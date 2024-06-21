
import React, { useState } from 'react';

function ImageHover({ size }) {
  const [hovered, setHovered] = useState(false);

  const defaultImage = './src/assets/images/nanabooboo-logo-closed.png';
  const hoverImage = './src/assets/images/nanabooboo-logo-open.png';

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const styles = {
    position: 'relative',
    top: '0',
    left: '0',
    width: size,
    height: 'auto', // Adjust height as needed
    margin: '1%',
  };

  return (
    <img
      src={hovered ? hoverImage : defaultImage}
      alt="BananaBooBoo Logo"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles}
    />
  );
}

export default ImageHover;
