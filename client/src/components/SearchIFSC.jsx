import { useState } from "react";
import axios from "axios";

export default function SearchIFSC({ onSearch }) {
  const [ifsc, setIfsc] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ifsc) return setError("Please enter IFSC Code");
    try {
      const res = await axios.get(`http://localhost:5000/api/ifsc/${ifsc}`);
      onSearch(res.data, ifsc);
      setError("");
    } catch {
      setError("Invalid IFSC Code");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter IFSC Code"
        value={ifsc}
        onChange={(e) => setIfsc(e.target.value.toUpperCase())}
        className="border p-2 flex-1 rounded"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Search
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
