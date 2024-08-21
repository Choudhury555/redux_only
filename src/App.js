import './App.css';
import Home from './Home';
import { useSelector } from 'react-redux';

function App() {
  const {counter} = useSelector(state=>state.custom);

  return (
    <div>
      <h1>{counter}</h1>
      <Home />
    </div>
  );
}

export default App;
