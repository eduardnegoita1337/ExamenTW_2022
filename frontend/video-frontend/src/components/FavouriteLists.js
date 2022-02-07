import {useState, useEffect} from 'react';
import FavouriteListsTable from './FavouriteListsTable';

function FavouriteLists() {
    const [favouriteLists, setFavouriteLists] = useState([]);
    const loadFavouriteLists = async () => {
        const response = await fetch('http://localhost:8080/api/favouriteList');
        if(response.status === 200) {
            setFavouriteLists(await response.json());
        }
    }
    useEffect(() => loadFavouriteLists(), []);
    return(
        <>
        <div>
            {
                favouriteLists.map((favouriteList, index) => <FavouriteListsTable key={index} favouriteList={favouriteList}/>)
            }
        </div>
        <a href='#/videos'>Videos</a>
        </>
    );
}
export default FavouriteLists;