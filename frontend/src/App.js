import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header'
import NoteList from './components/NoteList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={NoteList} />
    </div>
    </Router>
  );
}

export default App;
