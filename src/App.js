import React from 'react'
import Form from './Components/Form'
import {BrowserRouter , Route,Routes} from 'react-router-dom'
import Reviews from './Components/Reviews'


function App(){
  return (
    
     <BrowserRouter>
       <Routes>

        <Route path='/' element={<Form/> } />
        <Route path='/reviews' element={<Reviews/> } />   

       </Routes>
    </BrowserRouter> 
   
  );
  
}

export default App