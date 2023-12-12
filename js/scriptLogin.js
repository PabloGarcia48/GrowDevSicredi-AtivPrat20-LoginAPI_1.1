const formLogin = document.getElementById('form-login')

const loginInput = document.getElementById('userName')
const passwordInput = document.getElementById('userPassword')

let userLogged = ''
let passwordLogged = ''

formLogin.addEventListener('submit', (event) => {
  event.preventDefault() // impede comportamento padrão submit

   userLogged = loginInput.value;
   passwordLogged = passwordInput.value;

   fetchUsers()
})

async function fetchUsers() {
    try {
      const response = await api.get('/users')
      const users = response.data
      //console.log(users)

      const findedUser = users.some((user) => user.login === userLogged)
      //console.log(findedUser);

      const userLogin = users.filter(user1 => user1.login === userLogged)
      //console.log(userLogin);
      //console.log(userLogin[0].password);

      if (userLogin[0].password === passwordLogged) {
        console.log("Senha certa")
        location.href = "index.html"
      } else {
        alert("Senha errada")
        console.log("Senha errada")

      }

    } catch (error) {
      console.log('Erro ao buscar usuários', error)
      alert('Usuário Inexistente')
    }
  }
