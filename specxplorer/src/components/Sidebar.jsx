import PropTypes from 'prop-types';

import ApiMethod from "./ApiMethod";

export default function Sidebar({ endpoints, onSelect }) {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">API Endpoints</h2>
      <ul>
        {endpoints.map((endpoint) => (
          <li
            key={endpoint.id}
            className="p-2 flex items-center hover:bg-gray-700 cursor-pointer gap-2"
            onClick={() => onSelect(endpoint)}
          >
            <ApiMethod method={endpoint.method} />
            {endpoint.path}
          </li>
        ))}
      </ul>
    </aside>
  );
}



Sidebar.propTypes = {
    endpoints: PropTypes.any,
  onSelect: PropTypes.func,
};