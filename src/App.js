import './App.css';
import UserList from './components/UserList';
import ToggleButton from './components/ToggleTheme/ToggleTheme';

function App() {
  return (
    <div className="App">
        <ToggleButton />
        <UserList />
    </div>
  );
}

export default App;
