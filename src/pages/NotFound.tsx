import { Link } from "react-router-dom";

// text-[#9b87f5] dark:text-[#6a4bc5]
const NotFound = () => {
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
          <Link
            to="/"
            className="inline-block text-terminal-gray text-sm sm:text-base hover:text-[#9b87f5] transition-colors duration-300"
          >
            return home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
