
import React, { useState } from 'react';

function ImageHover() {
  const [hovered, setHovered] = useState(false);

  const defaultImage = 'frontend/src/assets/images/nanabooboo-logo-closed.png';
  const hoverImage = 'frontend/src/assets/images/nanabooboo-logo-open.png';

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const styles = {
    position: 'relative',
    top: '0',
    left: '0',
    width: '50%', // Adjust width as needed
    height: 'auto', // Adjust height as needed
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
