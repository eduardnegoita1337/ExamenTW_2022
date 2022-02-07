import {Table} from 'react-bootstrap';
function FavouriteListsTable(props) {
    const {favouriteList} = props;
    return(
        <>
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                <th>Descriere</th>
                <th>Data</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{favouriteList.descriere}</td>
                    <td>{favouriteList.data}</td>
                </tr>
                </tbody>
            </Table>
        </div>
        <a href={`#/favouriteLists/${props.favouriteList.id}`}>{props.favouriteList.descriere}</a>
        </>
    );
}
export default FavouriteListsTable;