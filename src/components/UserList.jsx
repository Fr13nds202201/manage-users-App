import React from 'react'

const UserList = ({ user, deleteUserById, setUpdateInfo }) => {

	const handleDelete = () => {
		deleteUserById(user.id)
		console.log(deleteUserById(user.id))
	}

	const handleUpdate = () => {
		setUpdateInfo(user)
	}


	return (
		<article>
		<h2>{`${user.first_name} ${user.last_name}`}</h2>			
		<ul>
			<li><span>Email: </span>{user.email}</li>
			<li><span>Birthday: </span>{user.birthday}</li>
		</ul>
		<button onClick={handleDelete}>Delete</button>
		<button onClick={handleUpdate}>Update</button>
		</article>
	)
}

export default UserList