import React from "react";

const App: React.FC = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="pb-28">
        <h1 className="font-bold tracking-wider uppercase md:text-6xl text-gray-900">
          Hi there :)
        </h1>
        <p className="mt-2 mb-8">this is an app look</p>
        <p className="custom-class monotype">this has a custom class</p>
      </div>
    </div>
  );
};

export default App;
