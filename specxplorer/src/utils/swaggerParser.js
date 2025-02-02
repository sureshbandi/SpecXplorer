/**
 * Loads and parses the Swagger JSON from a given URL or file.
 */
export async function loadSwagger(url) {
    try {
      const response = await fetch(url);
      const swaggerJson = await response.json();
      return swaggerJson; // No need for swagger-parser
    } catch (error) {
      console.error("Failed to load Swagger JSON:", error);
      return null;
    }
  }
  

/**
 * Extracts API paths and details from Swagger JSON.
 */
export function parseApiDocs(swaggerJson) {
  if (!swaggerJson || !swaggerJson.paths) return {};

  const apiGroups = {};

  Object.entries(swaggerJson.paths).forEach(([path, methods]) => {
    Object.entries(methods).forEach(([method, details]) => {
      const category = details.tags?.[0] || "Uncategorized"; // Use first tag as category
      if (!apiGroups[category]) {
        apiGroups[category] = [];
      }

      apiGroups[category].push({
        id: `${method.toUpperCase()} ${path}`,
        path,
        method: method.toUpperCase(),
        summary: details.summary || "No description available",
        description: details.description || "",
        parameters: details.parameters || [],
        requestBody: details.requestBody || null,
        responses: details.responses || {},
      });
    });
  });

  return apiGroups;
}
