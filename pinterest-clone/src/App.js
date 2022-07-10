import './App.css';
import HomeShow from './components/Pages/HomeShow';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateNewPin from './components/AddPin/CreateNewPin';
import Account from './components/Profile/Account';
import Preview from './components/Home/Container/componentEach/Preview';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import ChangePass from './components/Auth/ChangePass';
import OTPcheck from './components/Auth/OTPcheck';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<HomeShow/>}></Route>
        <Route path='/pin/preview/:PinId' element={<Preview/>}/>
        <Route path='/addNew' element={<CreateNewPin/>}></Route>
        <Route path='/profile' element={<Account/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/changepassword' element={<ChangePass/>}/>
        <Route path='/otppreset' element={<OTPcheck/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
