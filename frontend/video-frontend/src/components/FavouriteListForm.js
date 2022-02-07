import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import './confirmDialog';

function FavouriteListForm(props) {
	const navigate = useNavigate();
	const {favouriteListId} = useParams();
	const [favouriteList, setFavouriteList] = useState({
		descriere: '',
		data: '',
	});
	const loadFavouriteList = async (favouriteListId) => {
		if (favouriteListId && favouriteListId !== 'new') {
			const response = await fetch(`http://localhost:8080/api/favouriteList/${favouriteListId}`);
			if (response.status === 200) {
				setFavouriteList(await response.json());
			}
		}
	}
	useEffect(() => loadFavouriteList(favouriteListId), [favouriteListId]);
	async function saveFavouriteList() {
		if (favouriteListId === 'new') {
			const response = await fetch('http://localhost:8080/api/favouriteList/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(favouriteList)
			});
			if (response.status === 201) {
				navigate('/');
			}
		} else {
			const response = await fetch(`http://localhost:8080/api/favouriteList/${favouriteListId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(favouriteList)
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	async function deleteFavouriteList() {
		if (favouriteListId && favouriteListId !== 'new'
			&& await document.getElementById('dialog')
				.confirmDialog('Delete this list?')) {
			const response = await fetch(`http://localhost:8080/api/favouriteList/${favouriteListId}`, {
				method: 'DELETE'
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	function set(property, value) {
		const record = {...favouriteList};
		record[property] = value;
		setFavouriteList(record);
	}
	return (
		<div className="form">
			<h1>Favourite list</h1>
			<form onSubmit={saveFavouriteList} onReset={() => navigate('/')}>
				<label>Descriere</label>
				<input type="text" value={favouriteList.descriere}
					onChange={event => set('descriere', event.target.value)}/>
				<label>Data</label>
				<input type="text" value={favouriteList.data}
					onChange={event => set('data', event.target.value)}/>
				<div className="buttons">
					<input type="submit" value="Save"/>
					{favouriteListId && favouriteListId !== 'new' && <input type="button" className="delete"
						value="Delete" onClick={deleteFavouriteList}/>}
					<input type="reset" value="Cancel"/>
				</div>
			</form>
			<div id="dialog" className="modal-dialog"/>
		</div>		
	);
}

export default FavouriteListForm;