import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Create from './create';
import Student from  './student';
import Update from './update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Student />}/>
<Route path='/create' element={<Create />}/>
<Route path='/update/:id' element={<Update />}/>    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
