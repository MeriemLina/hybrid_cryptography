import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const AnimationScreen=() =>{
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result;

 useEffect(() => {

    const timeout = setTimeout(() => {
      navigate("/results", { state: { result } });
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [navigate, result]);

  return (
    <div className="h-screen flex items-center justify-center text-black text-3xl">
      {/* Replace this with your animation */}
      <p>🔒 Encrypting message...</p>
    </div>
  );
}

export default AnimationScreen;