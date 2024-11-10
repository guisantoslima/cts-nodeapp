import './style.css'
import Delete from '../../assets/delete.png'

function Home() {

  const users = [{
    id: '2024110901',
    name: 'Guilherme',
    email: 'email01@mail.com',
    password: '12345'
  }, {
    id: '2024110902',
    name: 'Ana Carolina',
    email: 'email02@mail.com',
    password: '12345'
  },
  {
    id: '2024110903',
    name: 'Josefa',
    email: 'email03@mail.com',
    password: '12345'
  }
  ]
  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='name' type='text' />
        <input placeholder='Email' name='email' type='email' />
        <input placeholder='Senha' name='password' type='password' />
        <button type='button'>Cadastrar</button>
      </form>
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:      <span>{user.name}</span></p>
            <p>Email:     <span>{user.email}</span></p>
            <p>Password:  <span>{user.password}</span></p>
          </div>
          <button>
            <img src='Delete'/>
          </button>
        </div>
      ))}
    </div>
  )
}


export default Home
