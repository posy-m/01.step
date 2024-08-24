
import { Route, Routes } from 'react-router-dom';
import Main from './page/Main/Main';
import Join from './page/Join/Join';
import Login from './page/Login/Login';
import Header from './page/Header/Header';
import Body from './page/Body/Body';


function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
