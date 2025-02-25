import React, { useEffect } from 'react';
import { useParams } from 'react-router';

function VideoList(props) {
    let { cid } = useParams();

    useEffect(() => {
        const url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id="+cid);

        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data.contents)) // XML data is inside `contents`
            .catch(error => console.error("Error:", error));
    }, [])
    return (
        <div>

        </div>
    );
}

export default VideoList;