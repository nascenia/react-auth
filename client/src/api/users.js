import axios from 'axios'

const baseUrl = 'http://localhost:8000';
const url = '/users';
const signInUrl = '/user_token';
const profileUrl = 'users/profile'
const formatToken = (jwt) => {
  return {
    Authorization: 'Bearer ' + jwt
  }
}

const apiAxios = axios.create({
  baseURL: baseUrl,
  // timeout: 1000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});

const fetchUserProfile = (jwt) => {
  return apiAxios.get(profileUrl, { headers: formatToken(jwt)})
    .then(res => {
      console.log('---user fetch data success')
      let user = res.data;
      user['jwt'] = jwt;
      return user;
    })
    .catch(error => {
      console.log('---user fetch data success')
      console.log(error.message);
      return {
        jwt: '',
        type: '',
      }
    })
}


export default {
  signUp: (user) => {
    return apiAxios.post(url, { user: user })
      .then(res => {
        // console.log('--- with in real async call of signUp success' + res);
        return res.data;
      })
      .catch(error => {
        throw error;
      })
  },

  signIn: (user) => {
    console.log('------- signIn api called with parameter:');
    console.log(user);
    return apiAxios.post(signInUrl, { auth: user })
      .then(res => {
        console.log('User sign in success now fetch data');
        console.log(res);
        return fetchUserProfile(res.data.jwt)
      })
      .catch(error => {
        throw new Error(['User email/password invalid']);
      })
  },
  
}
