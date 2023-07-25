import './App.css';
import MainPage from './components/MainPage';
import Footer from './components/Footer'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="react-portfolio">
      <Navigation />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
