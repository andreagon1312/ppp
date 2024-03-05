const store = require('./store.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// CRUD = C = create, R = Read, U = Update, D = Delete

function addUser(user) {
  return new Promise(async(resolve, reject) => {
    if (!user.username || !user.email || !user.password) {
      return reject('Correo o contraseña inválidos');
    }
    
    const hash= await bcrypt.hash(user.password, saltRounds);
    
    const newUser = {
        fullname: user.fullname,
        username: user.username,
        email: user.email,
        password: hash
      }
      store.add(newUser);
      resolve(newUser);

  })
}

function listUsers() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

function getOnlyUser(id) {
  return new Promise((resolve, reject) => {
    resolve(store.getOnly(id));
  })
}

function updateUserData(id, userData) {
  return new Promise((resolve, reject) => {
    if (!id || !userData) {
      return reject('El id es incorrecto o el correo');
    }

    resolve(store.update(id, userData));
  })
}

module.exports = {
  addUser,
  listUsers,
  getOnlyUser,
  updateUserData
}