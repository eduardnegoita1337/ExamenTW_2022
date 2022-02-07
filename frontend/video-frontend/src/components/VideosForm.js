import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import './confirmDialog';

function VideosForm(props) {
	const navigate = useNavigate();
	const {videoId} = useParams();
	const [video, setVideo] = useState({
		descriere: '',
		titlu: '',
        URL: ''
	});
	const loadVideo = async (videoId) => {
		if (videoId && videoId !== 'new') {
			const response = await fetch(`http://localhost:8080/api/video/${videoId}`);
			if (response.status === 200) {
				setVideo(await response.json());
			}
		}
	}
	useEffect(() => loadVideo(videoId), [videoId]);
	async function saveVideo() {
		if (videoId === 'new') {
			const response = await fetch('http://localhost:8080/api/video/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(video)
			});
			if (response.status === 201) {
				navigate('/');
			}
		} else {
			const response = await fetch(`http://localhost:8080/api/video/${videoId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(video)
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	async function deleteVideo() {
		if (videoId && videoId !== 'new'
			&& await document.getElementById('dialog')
				.confirmDialog('Are you sure you want to remove this video?')) {
			const response = await fetch(`http://localhost:8080/api/video/${videoId}`, {
				method: 'DELETE'
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	function set(property, value) {
		const record = {...video};
		record[property] = value;
		setVideo(record);
	}
	return (
		<div className="form">
			<h1>Video</h1>
			<form onSubmit={saveVideo} onReset={() => navigate('/')}>
				<label>Titlu</label>
				<input type="text" value={video.titlu}
					onChange={event => set('titlu', event.target.value)}/>
				<label>Descriere</label>
				<input type="text" value={video.descriere}
					onChange={event => set('descriere', event.target.value)}/>
                <label>URL</label>
                <input type="text" value={video.url}
                onChange={event => set('URL', event.target.value)}/>
				<div className="buttons">
					<input type="submit" value="Save"/>
					{videoId && videoId !== 'new' && <input type="button" className="delete"
						value="Delete" onClick={deleteVideo}/>}
					<input type="reset" value="Cancel"/>
				</div>
			</form>
			<div id="dialog" className="modal-dialog"/>
		</div>		
	);
}

export default VideosForm;