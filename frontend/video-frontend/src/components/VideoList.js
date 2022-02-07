import {Table} from 'react-bootstrap';
function VideoList(props) {
    const {video} = props;
    return(
        <>
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                <th>Titlu</th>
                <th>URL</th>
                <th>Descriere</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{video.titlu}</td>
                    <td>{video.url}</td>
                    <td>{video.descriere}</td>
                </tr>
                </tbody>
            </Table>
        </div>
        <a href={`#/videos/${props.video.id}`}>{props.video.titlu}</a>
        </>
    );
}
export default VideoList;