import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Channels(props) {
    const [saved, setSaved] = useState(null);
    useEffect(() => {
            let pre = localStorage.getItem("chList");
            if (pre) {
                pre = JSON.parse(pre)
                setSaved(pre);
    
            }
        }, [])

    return (
        <div>
            <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">The channels you saved</li>
  {saved && saved.map((v,k)=>
    <Link to={"/videoList/"+v.id}><li key={k} className="list-row">
    <div><img className="size-10 rounded-box" src="https://placehold.co/400x400"/></div>
    <div>
      <div>{v.name}</div>
      <div className="text-xs uppercase font-semibold opacity-60">{v.id}</div>
    </div></li>
    </Link>
  )}
  
  
  
  
</ul>
        </div>
    );
}

export default Channels;