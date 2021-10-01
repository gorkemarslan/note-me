import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import NoteList from './components/NoteList';
import NoteDetail from './components/NoteDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={NoteList} />
        <Route path="/:id" component={NoteDetail} />
    </div>
    </Router>
  );
}

export default App;
