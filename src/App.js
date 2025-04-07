import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import OnlineMenu from './components/OnlineMenu';
import ReserveTable from './components/ReserveTable';
import About from './components/About';
import OrderOnline from './components/OrderOnline';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/online-menu" element={<OnlineMenu />} />
        <Route path="/reserve-table" element={<ReserveTable />} />
        <Route path="/about" element={<About/>} />
        <Route path="/order-online" element={<OrderOnline/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/reservations" element={<Reservations/>} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
