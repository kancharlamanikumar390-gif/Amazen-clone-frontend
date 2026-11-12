import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Prime from './prime';
import Mobile from './mobiles';
import Header from './header';
import welcome from './welcome';
function App() {
    return(
 <BrowserRouter>
 <Header/>
 <Routes>
  <Route path='/' element={<Menu/>}></Route>
  <Route path='/prime' element={<Prime/>}></Route>
  <Route path='/mobile' element={<Mobile/>}></Route>
 </Routes>
 </BrowserRouter>
    );
}

export default App;
