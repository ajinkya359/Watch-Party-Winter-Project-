import Login from "./pages/Login";
import Register from "./pages/Register";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import { RoomId } from "./Context/room_id";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={"Page not found"} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
