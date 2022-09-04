import UserFavorites from './UserFavorites';
import React from 'react'
import { useState } from 'react'

const TableData = () => {
	const [userFavorites, setUserFavorites] = useState([]);

	const tableRows = userFavorites.map((userFavorite) => {
		return (
			<tr>
				<td>{userFavorite.id} </td>
				<td>{userFavorite.image}</td>
				<td>{userFavorite.name}</td>
				<td>{userFavorite.brand}</td>
				<td>{userFavorite.category}</td>
				<td>{userFavorite.price}</td>
			</tr>
		);
	});

	const addRows = (userFavorite) => {
		const allUserFavorites = userFavorites.length;
		userFavorite.id = allUserFavorites + 1;
		const updatedUserFavorites = [...userFavorites];
		updatedUserFavorites.push(userFavorite);
		setUserFavorites(updatedUserFavorites);
	};

	return (
		<div>
			<table>
				<thead>
					<th>Image</th>
					<th>Name</th>
					<th>Brand</th>
					<th>Category</th>
					<th>Price</th>
				</thead>
				<tbody>{tableRows}</tbody>
			</table>
			<UserFavorites func={addRows} />
		</div>
	);
};

export default TableData;
