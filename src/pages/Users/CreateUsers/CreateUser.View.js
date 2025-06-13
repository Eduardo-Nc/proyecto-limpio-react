import React from 'react'

//CSS
import "./CreateUser.css"

//Model
import CreateUserModel from "./CreateUser.Model"

const CreateUser = () => {
  const { loading } = CreateUserModel()

  return (
    <div className='mainContainer'>
      <h1 className='txtTile'>Hola desde create users</h1>
    </div>
  )
}

export default CreateUser;