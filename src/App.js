import { Route, Routes } from 'react-router-dom';
import './App.css';
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword';
import Home from './components/Pages/Home/Home';
import Inventory from './components/Pages/Inventory/Inventory';
import Login from './components/Pages/Login/Login';
import NotFoundPage from './components/Pages/NotFoundPage/NotFoundPage';
import RequireAuth from './components/Pages/RequireAuth/RequireAuth';
import Header from './components/Shared/Header/Header';
import SignUp from './components/Pages/SignUp/SignUp';
import ManageInventories from './components/Pages/ManageInventories/ManageInventories';
import BLog from './components/Pages/Blog/BLog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/blog' element={<BLog/>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageInventories' element={
          <RequireAuth>
              <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/forgotPassword' element={<ForgotPassword/>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
