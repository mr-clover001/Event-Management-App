import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EventList from './Components/EventList';
import CreateEvent from './Components/CreateEvent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EventList />}></Route>
        <Route path="/CreateEvent" element={<CreateEvent />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
