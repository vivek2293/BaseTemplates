import Hello from './pages/Hello';
import Main from './pages/Main';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Routes>
      <Route exact path= "/" element={<Main></Main>} />
      <Route exact path= "/hi" element={<Hello></Hello>} />
    </Routes>
    </>
  );
}

export default App;
