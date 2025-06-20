import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaptopsComputers from "./LaptopsComputers";
import Cameras from "./Cameras";
import PcComputers from "./PcComputers";
function AllCollections() {
  return (
    <Router>
      <Routes>
        <Route path="/laptopComputer" element={<LaptopsComputers />} />
        <Route path="/accesories" element={<PcComputers />} />
        <Route path="/electronics" element={<Cameras />} />
      </Routes>
    </Router>
  );
}

export default AllCollections;
