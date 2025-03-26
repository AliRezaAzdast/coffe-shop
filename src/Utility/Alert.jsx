const Alert = ({ message, type, onClose }) => {
    const alertStyles = {
      success: "bg-green-100 text-green-800 border-green-400",
      error: "bg-red-100 text-red-800 border-red-400",
      warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
      info: "bg-blue-100 text-blue-800 border-blue-400",
    };
  
    return (
      <div className={`fixed z-50 top-5 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg border ${alertStyles[type]}`}>
        <p>{message}</p>
        <button onClick={onClose} className="ml-4 text-sm font-semibold underline">
          بستن
        </button>
      </div>
    );
  };
  
  export default Alert;
  