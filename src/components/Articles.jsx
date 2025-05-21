import { Link } from "react-router-dom";

function Articles() {
  return (
    <div className="pt-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Articles</h1>
      </div>
      {/* Add your articles content here */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-[#112240] hover:bg-[#233554] transition-colors">
          <h2 className="text-xl font-semibold mb-2">Coming Soon...</h2>
          <p className="text-gray-400">Articles will be available shortly.</p>
        </div>
      </div>
    </div>
  );
}

export default Articles;
