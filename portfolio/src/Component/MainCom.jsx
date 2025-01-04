import React from 'react';

const MainCom = () => {
  return (
    <main className="m-5 p-5 flex flex-col items-center justify-center gap-40 sm:flex-row">
      <div className="sm:text-left sm:flex-1">
        <h1 className="text-5xl font-bold text-center my-8">
          Hi, It's Somesh Khandolkar
        </h1>
        <h3 className="text-3xl font-bold text-center">welcome to PortFolio</h3>
      </div>
      <div className="sm:flex-1 flex justify-center">
        <img
          src="https://img.freepik.com/premium-vector/smiling-young-man-glasses_1308-173396.jpg?w=1480"
          alt="Smiling young man"
          className="object-contain h-auto w-1/2  "
        />
      </div>
    </main>
  );
};

export default MainCom;
