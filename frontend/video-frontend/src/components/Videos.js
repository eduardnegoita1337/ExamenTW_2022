import {useState, useEffect} from 'react';
import VideoList from './VideoList';

function Videos() {
    const [videos, setVideos] = useState([]);
    const loadVideos = async () => {
        const response = await fetch('http://localhost:8080/api/video');
        if(response.status === 200) {
            setVideos(await response.json());
        }
    }
    useEffect(() => loadVideos(), []);
    return(
        <>
        <div>
            {
                videos.map((video, index) => <VideoList key={index} video={video}/>)
            }
        </div>
        <a href='http://localhost:3000/favouriteLists'>Favourite Lists</a>
        
        </>
    );
}
export default Videos;