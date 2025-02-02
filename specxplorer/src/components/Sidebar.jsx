import { useState } from "react";
import PropTypes from "prop-types";
import ApiMethod from "./ApiMethod";

export default function Sidebar({ endpoints, onSelect }) {
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">API Endpoints</h2>
      <ul>
        {Object.entries(endpoints).map(([category, apiList]) => (
          <li key={category} className="mb-2">
            {/* Category Header */}
            <div
              className="p-2 bg-gray-700 font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              {category}
              <span>{expandedCategories[category] ? "🔽" : "▶️"}</span>
            </div>

            {/* API Endpoints (Hidden/Visible Based on Toggle) */}
            {expandedCategories[category] && (
              <ul className="ml-4 mt-2">
                {apiList.map((endpoint) => (
                  <li
                    key={endpoint.id}
                    className="p-2 flex items-center hover:bg-gray-600 cursor-pointer gap-2"
                    onClick={() => onSelect(endpoint)}
                  >
                    <ApiMethod method={endpoint.method} />
                    {endpoint.path}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {
  endpoints: PropTypes.objectOf(PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      summary: PropTypes.string,
    })
  )).isRequired,
  onSelect: PropTypes.func.isRequired,
};
