export default function BranchDetails({ branch }) {
  console.log(branch);
  
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">{branch.bank} - {branch.branch}</h2>
      <p><strong>Address:</strong> {branch.address}</p>
      <p><strong>State:</strong> {branch.state}</p>
      <p><strong>District:</strong> {branch.district}</p>
      <p><strong>MICR:</strong> {branch.micr}</p>
      <p><strong>Contact:</strong> {branch.contact || "N/A"}</p>
    </div>
  );
}
