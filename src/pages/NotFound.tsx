import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="text-center space-y-8 animate-fade-in">
        <pre className="font-mono text-[#9b87f5] whitespace-pre text-sm sm:text-base select-none">
          {`    _  _    ___  _  _   
   | || |  / _ \\| || |  
   | || |_| | | | || |_ 
   |__   _| |_| |__   _|
      |_|  \\___/   |_|  
`}
        </pre>
        <div className="space-y-4">
          <p className="text-terminal-gray text-sm sm:text-base">
            "In the digital wilderness, even pixels get lost sometimes"{" "}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-block text-terminal-gray text-sm sm:text-base hover:text-[#9b87f5] transition-colors duration-300"
          >
            return home
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
