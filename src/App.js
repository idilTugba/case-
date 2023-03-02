import Header from './components/navbar/';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
