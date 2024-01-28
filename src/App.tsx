import { Router } from './router/Router';
import { Header, Footer } from './components';
import './App.css';

//! Check if the theme in the main div is the most adequate solution

function App() {
  console.log(import.meta);

  return (
    <div className='bg-white dark:bg-gray-800'>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
