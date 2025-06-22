import { useLocation } from "react-router-dom";

const ResultScreen = () => {
  const location = useLocation();
  const result = location.state?.result;

  return (
    <div className="h-screen flex flex-col items-center justify-center text-black">
      <h1 className="text-3xl mb-4">🧠 Crypto Results</h1>
      <p className="text-xl text-green-400">{result}</p>
    </div>
  );
};

export default ResultScreen;
