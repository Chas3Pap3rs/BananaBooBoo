import { useState, useEffect } from 'react';
import ImageHover from './ImageHover';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [forceHover, setForceHover] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      // Check if window width is less than or equal to 1000px
      if (window.innerWidth <= 1000) {
        setForceHover(isOpen); // Use isOpen state to determine forceHover
      } else {
        setForceHover(false); // Force close the image when window width is greater than 1000px
      }
    };

    // Call handleResize on component mount to set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]); // Re-run effect when isOpen changes

  const handleLogoClick = () => {
    if (window.innerWidth > 1000) {
      navigate('/frontend/home');
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div className="header-container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">
            <button className="large-logo-navbar-toggler" type="button" onClick={handleLogoClick}>
              <ImageHover size="75%" forceHover={forceHover} className="imageHoverMargin" />
            </button>
          </Navbar.Brand>
          {isOpen && (
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/frontend/home" className="btn">Home</Link>
                <Link to="/frontend/banana-scale" className="btn">Nanerverter</Link>
                <Link to="/frontend/banana-recipes" className="btn">Banana Recipes</Link>
                <Link to="/frontend/banana-fun-facts" className="btn">Banana Fun Facts</Link>
                <Link to="/frontend/banana-forum" className="btn">Banana Forum</Link>
                <Link to="/frontend/banana-books" className="btn">Banana Books</Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Navbar>
      </div>
    </>
  );
};

export default Header;



// import { useState, useEffect } from 'react';
// // import ReactDOM from 'react-dom'
// import ImageHover from './ImageHover';
// import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faGhost } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

// function Header() {
//   const [isViewportSmall, setIsViewportSmall] = useState(window.innerWidth <= 1000);
//   const navigationItems = [
//     // ... your navigation items
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsViewportSmall(window.innerWidth <= 1000);
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup the event listener on component unmount
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);


//   return (
//     <>
//       <div className="header-container">
//         <Navbar bg="light" expand="lg">
//           <Navbar.Brand href="#">
//             <ImageHover size="75%" />  {/* Your logo component */}
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav" title="drop">
          
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     </>
//   );
  
// }

// export default Header;