import PropTypes from 'prop-types';

export default function ApiMethod({ method }) {
  const colors = {
    GET: "bg-green-500",
    POST: "bg-blue-500",
    PUT: "bg-yellow-500",
    DELETE: "bg-red-500",
  };

  return (
    <span className={`px-3 py-1 rounded text-white ${colors[method] || "bg-gray-500"}`}>
      {method}
    </span>
  );
}


ApiMethod.propTypes ={
    method: PropTypes.any
}