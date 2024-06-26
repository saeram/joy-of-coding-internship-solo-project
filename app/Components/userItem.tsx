"use client";

import React from "react";

const UserItem = () => {
  return (
    <div className="bg-slate-50 flex items-center justify-between gap-2 border rounded-md p-2">
      <div className="avatar rounded-full min-h-10 min-w-10 bg-sky-950 text-white font-[700] flex items-center justify-center">
        <p>SE</p>
      </div>
      <div className="grow">
        <p className="text-[19px] font-bold">Saeram Evensen</p>
        <p className="text-[12px] text-neutral-600">Saeramevensen@gmail.com</p>
      </div>
    </div>
  );
};

export default UserItem;
