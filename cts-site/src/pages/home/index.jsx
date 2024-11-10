import './style.css'
import api from '../../services/api.js'
import { useEffect, useState, useRef } from 'react'

function Home() {

  const[users, setUsers] = useState([])
  
  const inputName = useRef()
  const inputEmail = useRef()
  const inputPassword = useRef()


  async function postUser(){
    await api.post('/usr', {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value
    })
    getUser()

  }

  async function getUser(){
    const usrApiRes = await api.get('/usr')
    setUsers(usrApiRes.data)
  }

  async function delUser(id){
    await api.delete(`/usr/${id}`)
    getUser()
  }

  useEffect(() => {

    getUser()

  }, [])

  return (

    <div className='container'>
      <form autoComplete='off'>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type='text' autoComplete='off' ref={inputName}/>
        <input placeholder='Email' name='email' type='email' autoComplete='off' ref={inputEmail}/>
        <input placeholder='Senha' name='password' type='password' autoComplete='off' ref={inputPassword}/>
        <button type='button' onClick={postUser}>Cadastrar</button>
      </form>
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:      <span>{user.name}</span></p>
            <p>Email:     <span>{user.email}</span></p>
            <p>Password:  <span>{user.password}</span></p>
          </div>
          <button type='button' onClick={delUser(user.id)}> x </button>
        </div>
      ))}
    </div>
  )
}


export default Home
