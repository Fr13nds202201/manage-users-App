import React from 'react'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'

const UsersForm = ({ createNewUser,updateInfo,updateUserById,handleClose,setUpdateInfo }) => {

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
	handleClose()
	reset(defaultValues)
}

const handleX = () => {
	reset(defaultValues)
	setUpdateInfo()
	handleClose()
}

	return (
		<form className="form" onSubmit={handleSubmit(submit)}>
			<h2 className="form__title">Form User</h2>
			<div onClick={handleX} className="form__x">X</div>
			<div className="form__item">
				<label className="form__label" htmlFor="first_name">Nombre :</label>
				<input className="form__input" {...register('first_name')} type="first_name" id="first_name" />
			</div>
			<div className="form__item">
				<label className="form__label" htmlFor="last_name">Apellido :</label>
				<input className="form__input" {...register('last_name')} type="last_name" id="last_name" />
			</div>
			<div className="form__item">
				<label className="form__label" htmlFor="email">Email :</label>
				<input className="form__input" {...register('email')} type="email" id="email" />
			</div>
			<div className="form__item">
				<label className="form__label" htmlFor="password">Contrasela :</label>
				<input className="form__input" {...register('password')} type="password" id="password" />
			</div>
			<div className="form__item">
				<label className="form__label" htmlFor="birthday">Cumpleaños :</label>
				<input className="form__input" {...register('birthday')} type="date" id="birthday" />
			</div>
			<button className="form__btn">{ updateInfo ? 'Update' : 'Create' }</button>
		</form>
	)
}

export default UsersForm