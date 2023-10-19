

const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-200 bg-opacity-80">
      <div className="w-16 h-16 border-t-2 border-b-2 border-purple-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;