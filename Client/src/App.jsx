import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
