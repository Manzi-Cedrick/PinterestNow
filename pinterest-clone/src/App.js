import './App.css';
import HomeShow from './components/Pages/HomeShow';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateNewPin from './components/AddPin/CreateNewPin';
import Account from './components/Profile/Account';
import Preview from './components/Home/Container/componentEach/Preview';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeShow/>}></Route>
        <Route path='/addNew' element={<CreateNewPin/>}></Route>
        <Route path='/profile' element={<Account/>}/>
        <Route path='/pin/preview' element={<Preview/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
