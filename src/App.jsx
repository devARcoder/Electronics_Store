// App.jsx
import { Toaster } from 'react-hot-toast';
import './App.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';

function App() {
  return (
    <>
      <Header />
      <Toaster position="top-right" reverseOrder={false}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
