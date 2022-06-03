import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetailView from "../src/Pages/BookDetailView/Index"
import EntrepreneurshipPage from "../src/Pages/Entrepreneurship/Index"
import MyLibrary from "../src/Pages/MyLibrary/Index"
import LogOutButton from './Components/Organisms/LogOutButton/Index';
import LoginPage from './Pages/Login/Index';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated, isLoading} = useAuth0();
  if(isLoading){
    return <div>Loading...</div>
  }
  if(isAuthenticated){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/bookDetails' element = {<BookDetailView/>} />
          <Route path='/entrepreneur' element={<EntrepreneurshipPage/>} />
          <Route path='/logout' element={<LogOutButton/>} />
          <Route path='/' element = {<MyLibrary/>} />
        </Routes>
      </BrowserRouter>
    );
  }else{
    return <LoginPage/>
  }
}

export default App;