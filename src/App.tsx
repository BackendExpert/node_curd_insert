import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserCreate from "./user/create";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="User/create" element={<UserCreate />}></Route>
      </Routes>
    </BrowserRouter>
  )
}