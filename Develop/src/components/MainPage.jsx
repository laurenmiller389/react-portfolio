import { useState } from 'react';
import Navigation from './Navigation';
import Resume from './Resume';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function MainPage() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };
const handlePageChange = (page) => setCurrentPage(page);

return (
  <div>
    {/* We are passing the currentPage from state and the function to update it */}
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    {/* Here we are calling the renderPage method which will return a component  */}
    <main className="mx-3">{renderPage()}</main>
  </div>
);

}

 //page change? or is it on one page