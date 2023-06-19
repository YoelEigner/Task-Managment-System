import logo from './logo.svg';
import './App.css';
import { Main } from './Componenets/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TaskItem } from './Componenets/TaskItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route exact path="/item/:id" element={<TaskItem />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
