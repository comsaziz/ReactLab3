import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';

function App() {
  return (
    <div>
      <Nav />
      <Outlet /> 
    </div>
  );
}

export default App;
