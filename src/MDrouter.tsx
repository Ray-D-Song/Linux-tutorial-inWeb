
import { BrowserRouter, Route, Routes } from "react-router-dom"
import P1renderer from './P1renderer'
import P2renderer from './P2renderer'
import P3renderer from './P3renderer'
import P4renderer from './P4renderer'

export default function MDrouter() {
    return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<P1renderer />} />
      <Route path="/LinkPho" element={<P1renderer />} />
      <Route path="/Command" element={<P2renderer />} />
      <Route path="/AboutVim" element={<P3renderer />} />
      <Route path="/gcc" element={<P4renderer />} />
    </Routes>
  </BrowserRouter>
    )

}
