import { useState } from "react";
import SearchIFSC from "./components/SearchIFSC";
import BranchDetails from "./components/BranchDetails";
import RecentSearches from "./components/RecentSearches";
import "./index.css";

export default function App() {
  const [branchData, setBranchData] = useState(null);
  const [recent, setRecent] = useState(
    JSON.parse(localStorage.getItem("recentSearches")) || []
  );

  const handleSearch = (data, code) => {
    setBranchData(data);
    const updatedRecent = [code, ...recent.filter(c => c !== code)].slice(0, 5);
    setRecent(updatedRecent);
    localStorage.setItem("recentSearches", JSON.stringify(updatedRecent));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">IFSC Code Lookup</h1>
      <SearchIFSC onSearch={handleSearch} />
      <RecentSearches recent={recent} onSearch={handleSearch} />
      {branchData && <BranchDetails branch={branchData} />}
    </div>
  );
}
