
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage, HomePage, LoginPage, Navbar } from './';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>MainApp</h1>
            <Navbar />
        <hr />

        <Routes>
            <Route path='/' element={ <HomePage /> }/>
            <Route path='login' element={ <LoginPage /> }/>
            <Route path='about' element={ <AboutPage /> }/>

            {/* <Route path='/*' element={ <HomePage /> }/> */}
            <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
    </UserProvider>
  )
}
