import React, { useEffect, useState } from 'react';


function Settings(props) {
    const [chId, setChId] = useState(null);
    const [saved, setSaved] = useState([]);

    function save() {
        let pre = localStorage.getItem("chList");
        if (pre) {
            pre = pre.split(",");
            pre.push(chId)
            pre = pre.join(",");
            localStorage.setItem("chList", pre);
            alert("Added!");
        }
        else {
            localStorage.setItem("chList", chId);
            alert("Added!");
        }
    }

    useEffect(() => {
        let pre = localStorage.getItem("chList");
        if (pre) {
            pre = pre.split(",");
            setSaved(pre);

        }
    }, [])
    return (<>
        <div className='flex justify-center p-7'>
            <div className="bg-base-300  card w-96  card-sm shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">Channel ID</h2>
                    <p><input type="text" value={chId} onChange={(e) => setChId(e.target.value)} placeholder="UCJJBtUqjm-QjJ7Cvtz0yqbQ" className="input" /></p>
                    <div className="justify-end card-actions">
                        <button onClick={() => save()} className="btn btn-primary">Add {chId}</button>
                    </div>
                </div>
            </div>

        </div>

    </>
    );
}

export default Settings;