import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'

const UsersForm = ({ createNewUser,updateInfo,updateUserById }) => {

const {reset, register, handleSubmit} = useForm()

useEffect(() => {
	if(updateInfo) {
	reset(updateInfo)
	}
	
}, [updateInfo])


const submit = data => {
	if(updateInfo){
		//update
		updateUserById(updateInfo.id, data)
	} else {
		//create
		createNewUser(data)
	}
	
	reset(defaultValues)
}

	return (
		<form onSubmit={handleSubmit(submit)}>
			<div>
				<label htmlFor="first_name">Nombre :</label>
				<input {...register('first_name')} type="first_name" id="first_name" />
			</div>
			<div>
				<label htmlFor="last_name">Apellido :</label>
				<input {...register('last_name')} type="last_name" id="last_name" />
			</div>
			<div>
				<label htmlFor="email">Email :</label>
				<input {...register('email')} type="email" id="email" />
			</div>
			<div>
				<label htmlFor="password">Contrasela :</label>
				<input {...register('password')} type="password" id="password" />
			</div>
			<div>
				<label htmlFor="birthday">Cumpleaños :</label>
				<input {...register('birthday')} type="date" id="birthday" />
			</div>
			<button>{ updateInfo ? 'Update' : 'Create' }</button>
		</form>
	)
}

export default UsersForm