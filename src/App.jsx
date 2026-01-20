import Login from "./Auth/Login";
import { Route, Routes } from "react-router-dom";
import Dashobard from "./Page/Dashobard/Dashobard";
import Layout from "./Components/Layout";
import User from "./Page/Users/User";
import Tax from "./Page/Tax/Tax";
import Files from "./Page/Files/Files";
import Image from "./Image";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashobard />} />
            <Route path="/users" element={<User />} />
            <Route path="/tax" element={<Tax />} />
            <Route path="/files" element={<Files />} />
          </Route>
        </Routes>
        {/* <Image /> */}
      </div>
    </>
  );
}

export default App;
