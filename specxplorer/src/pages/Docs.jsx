import  { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ApiDoc from "../components/ApiDoc";
import { loadSwagger, parseApiDocs } from "../utils/swaggerParser";

export default function Docs() {
  const [apiDocs, setApiDocs] = useState([]);
  const [selectedApi, setSelectedApi] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const swaggerData = await loadSwagger("/swagger.json"); // Change to API URL if needed
      if (swaggerData) {
        setApiDocs(parseApiDocs(swaggerData));
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar endpoints={apiDocs} onSelect={setSelectedApi} />
      <div className="flex-1">
        <Header />
        <ApiDoc selectedApi={selectedApi} />
      </div>
    </div>
  );
}
