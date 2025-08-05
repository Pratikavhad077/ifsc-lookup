import axios from "axios";
import { getIFSCDetails } from "../services/api";
export default function RecentSearches({ recent, onSearch }) {
  if (recent.length === 0) return null;

  const handleClick = async (code) => {
  const res = await getIFSCDetails(code);
  onSearch(res.data, code);
};

  return (
    <div className="mb-4">
      <h3 className="font-semibold mb-2">Recent Searches</h3>
      <div className="flex gap-2 flex-wrap">
        {recent.map(code => (
          <button
            key={code}
            onClick={() => handleClick(code)}
            className="bg-gray-300 px-3 py-1 rounded"
          >
            {code}
          </button>
        ))}
      </div>
    </div>
  );
}
