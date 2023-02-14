import React from 'react'

const UserList = ({ user, deleteUserById, setUpdateInfo, handleOpen }) => {

	const handleDelete = () => {
		deleteUserById(user.id)
		console.log(deleteUserById(user.id))
	}

	const handleUpdate = () => {
		setUpdateInfo(user)
		handleOpen()
	}


	return (
		<article>
			<div className="single-card">
				<div className="wrapper">
					<h2>{`${user.first_name}`} <span className="first-name">{`${user.last_name}`}</span></h2>

					<ul>
						<li><span>Email: </span>{user.email}</li>
						<li><span>Birthday: </span>{user.birthday}</li>
					</ul>
						<button onClick={handleDelete}>Delete</button>
						<button onClick={handleUpdate}>Update</button>
				</div>			
			</div>
		</article>
	)
}

export default UserList