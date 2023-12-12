const formNewUser = document.getElementById('form-new-user')
const nomeInput = document.getElementById('nome')
const avatarInput = document.getElementById('avatar')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')



formNewUser.addEventListener('submit', (event) => {
  event.preventDefault() // impede comportamento padrão submit

  const nomeValue = nomeInput.value;
  const avatarValue = avatarInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  const storedUsersJSON = localStorage.getItem('Usuários');
  const users = storedUsersJSON ? JSON.parse(storedUsersJSON) : [];

  const newUser = {
    name: nomeValue,
    avatar: avatarValue,
    email: emailValue,
    password: passwordValue,
  }

  users.push(newUser);
  localStorage.setItem('Usuários', JSON.stringify(users));

  createNewUser(newUser)
})

async function createNewUser(user) {
  try {
    const response = await api.post('/users', user)

    if (response.status === 201) {
      alert('Usuário cadastrado com sucesso!')

      nomeInput.value = ""
      avatarInput.value = ""
      emailInput.value = ""
      passwordInput.value = ""

      location.href = "index.html"
    }
  } catch (error) {
    console.log('Erro ao cadastrar recado', error)
  }
}
