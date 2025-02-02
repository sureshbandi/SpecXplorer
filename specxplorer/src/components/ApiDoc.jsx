
import PropTypes from 'prop-types';
import ApiMethod from "./ApiMethod";
import MarkdownRenderer from "./MarkdownRenderer";

export default function ApiDoc({ selectedApi }) {
  if (!selectedApi) {
    return <div className="p-4 text-gray-500">Select an API endpoint</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold flex items-center gap-2">
        <ApiMethod method={selectedApi.method} />
        {selectedApi.path}
      </h2>
      <MarkdownRenderer content={selectedApi.description} />

      {/* Parameters */}
      {selectedApi.parameters.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold text-lg">Parameters:</h3>
          <table className="w-full border-collapse border border-gray-600">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="border p-2">Name</th>
                <th className="border p-2">Type</th>
                <th className="border p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {selectedApi.parameters.map((param) => (
                <tr key={param.name} className="border">
                  <td className="p-2">{param.name}</td>
                  <td className="p-2">{param.schema?.type || "unknown"}</td>
                  <td className="p-2">{param.description || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Request Body */}
      {selectedApi.requestBody && (
        <div className="mt-4">
          <h3 className="font-semibold text-lg">Request Body:</h3>
          <pre className="bg-gray-900 text-green-400 p-4 rounded">
            {JSON.stringify(selectedApi.requestBody, null, 2)}
          </pre>
        </div>
      )}

      {/* Responses */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg">Responses:</h3>
        {Object.entries(selectedApi.responses).map(([status, details]) => (
          <div key={status} className="mb-4">
            <h4 className="font-semibold text-gray-600">Status {status}</h4>
            <pre className="bg-gray-900 text-blue-400 p-4 rounded">
              {JSON.stringify(details, null, 2)}
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}


ApiDoc.propTypes = {
    selectedApi : PropTypes.any
}
