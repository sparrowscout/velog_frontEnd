
import './App.css';
import { Route , Routes }from "react-router-dom"
import Main from './Main';
import Header from './Header';
import Detail from './Detail';
import Login from './Login';
import Search from './Search';
import MyVelog from './MyVelog';
import Write from './Write';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/detail" exact element={<Detail />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/myvelog/*" exact element={<MyVelog />} />
          <Route path="/write" exact element={<Write />} />
        </Routes>
    </div>
  );
}

export default App;
