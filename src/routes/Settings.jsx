import React, { useEffect, useState } from 'react';


function Settings(props) {
    const [chId, setChId] = useState("");
    const [chName, setChName] = useState("");
    
    function save() {
        if (chId == "" || chName == "") return;

        let pre = localStorage.getItem("chList");
        if (pre) {
            pre = JSON.parse(pre);
            pre.push({"id":chId,"name":chName})
            localStorage.setItem("chList", JSON.stringify(pre));
            alert("Added!");
        }
        else {
            let aArray = [];
            aArray.push({"id":chId,"name":chName})
            localStorage.setItem("chList", JSON.stringify(aArray));
            alert("Added!");
        }
    }

    
    return (<>
        <div className='flex justify-center p-7'>
            <div className="bg-base-300  card w-96  card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Channel info</h2>
                    <p>
                        <input type="text" value={chId} onChange={(e) => setChId(e.target.value)} placeholder="UCJJBtUqjm-QjJ7Cvtz0yqbQ" className="input " />
                        <input type="text" value={chName} onChange={(e) => setChName(e.target.value)} placeholder="A nice channel name" className="input mt-2 " />

                    </p>
                    <div className="justify-end card-actions">
                        <button onClick={() => save()} className="btn btn-primary ">Add {chName}</button>
                    </div>
                </div>
            </div>

        </div>

    </>
    );
}

export default Settings;