
import Main from './components/page/Main';
import { Route, Routes } from 'react-router-dom';
import Join from './components/page/Join';
import Login from './components/page/Login';
import Center from './components/page/Center';
import MainImg from './components/page/MainImg';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/mainImg' element={<MainImg />}></Route>
        <Route path='/' element={<Center />} />
        <Route path='/main' element={<Main />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
