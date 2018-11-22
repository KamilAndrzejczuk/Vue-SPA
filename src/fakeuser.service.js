// import axios from 'axios'

// let users = JSON.parse(window.localStorage.getItem('users')) || []

const fakeUserService = {

  backendConfig () {
  },
  login (credentials) {
    //   axios('get', )
  },
  logout () {
    window.localStorage.setItem('token', null)
    window.localStorage.setItem('tokenExpiration', null)
  }
}

export default fakeUserService
