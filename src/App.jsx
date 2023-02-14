import axios from 'axios'
import { useState, useEffect } from 'react'
import UsersForm from './components/UsersForm'
import UserList from './components/UserList'
import './App.css'


function App() {
 
 const [users, setUsers] = useState()
 const [updateInfo, setUpdateInfo] = useState()

 console.log(updateInfo)

 const getAllUsers = () => {
  const url = 'https://users-crud.academlo.tech/users/'
  axios.get(url)
  .then(res => setUsers(res.data))
  .catch(err => console.log(err))
 }

 useEffect(() => {
   getAllUsers()
 }, [])

const createNewUser = data => {
  const url = 'https://users-crud.academlo.tech/users/'
  axios.post(url, data)
  .then(res => {
    console.log(res.data)
    getAllUsers()
  })
  .catch(err => console.log(err))
}

const deleteUserById = id => {
  const url = `https://users-crud.academlo.tech/users/${id}/`
  axios.delete(url)
  .then(res => {
    console.log(res.data)
    getAllUsers()
  })
  .catch(err => console.log(err))
}

const updateUserById = (id, data) => {
  const url = `https://users-crud.academlo.tech/users/${id}/`
  axios.put(url,data)
  .then(res => {
    console.log(res.data)
    getAllUsers()
    setUpdateInfo()
  })
  .catch(err => console.log(err))
}


  return (
    <div className="App">
     <h1>usuarios</h1>
     <UsersForm 
     createNewUser={createNewUser}
     updateInfo={updateInfo}
     updateUserById={updateUserById}
     />
     <div>
       {
        users?.map(user => (
          <UserList 
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            
          />
          ))
       }
     </div>
    </div>
  )
}

export default App
