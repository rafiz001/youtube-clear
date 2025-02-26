import { XMLParser } from 'fast-xml-parser';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

function VideoList(props) {
    let { cid } = useParams();
    const [list, setList] = useState([])
    const [channelInfo, setChannelInfo] = useState({ name: "loading..." })

    useEffect(() => {
        const url = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=" + cid);

        fetch(url)
            .then(response => response.json())
            .then(data => {
                //console.log(data.contents)
                const xmlData = data.contents;
                const parser = new XMLParser({ ignoreAttributes: false });
                const result = parser.parse(xmlData);
                const videos = result.feed.entry;

                videos.forEach(video => {

                    let temp = { title: video.title, videoId: video["yt:videoId"], thumbnail: video["media:group"]["media:thumbnail"]["@_url"], id: video["yt:videoId"] }
                    let newList = list;
                    newList.push(temp);
                    setList(newList);


                });
                setChannelInfo({ name: result.feed.title })
            })
            .catch(error => console.error("Error:", error));
    }, [])
    useEffect(() => {
        console.log(list);
    }, [list])


    return (
        <div>
            <h1 className='text-center text-3xl'>{channelInfo.name}</h1>
            {
                list.map((v, k) => <div key={k} className="card bg-base-300 w-full shadow-sm my-7 ">
                    <figure>
                        <img
                            src={v.thumbnail}
                            alt={v.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">{v.title}
                            <Link to={'/player/'+v.id} className="btn btn-primary">Watch now</Link>
                        </h2>


                    </div>
                </div>)
            }




        </div>
    );
}

export default VideoList;