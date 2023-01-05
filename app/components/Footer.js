import React from "react";

export default function Footer(props) {
    
  return (
    <footer className='py-6 text-center bg-orange-100 dark:bg-slate-900 dark:text-white'>
      <p className="font-center light text-mb-3">All Rights Reserved © {props.date}</p>
    </footer>
  );
}
