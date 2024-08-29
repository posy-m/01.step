import { Route, Routes } from 'react-router-dom';
import BodyGif from './components/page/body/BodyGif';
import Header from './components/page/Header';
import Main from './components/page/Main';
import SiginUp from './components/page/SiginUp';
import SignIn from './components/page/SignIn';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SiginUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/headeer' element={<Header />} />
        {/* <Route path='/gif' element={<BodyGif />} /> */}
      </Routes>
    </div>
  );
}

export default App;
