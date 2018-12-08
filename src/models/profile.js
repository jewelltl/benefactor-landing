import { BaseModel } from '@/models/base'

class Profile extends BaseModel {
  defaults () {
    return {
      email: '',
      role: 0,
      password: '',
      passwordConfirmation: ''
    }
  }

  routes () {
    return {
      fetch: 'me',
      save: 'me'
    }
  }

  mutations () {
    return {
      profile: (p) => p || {}
    }
  }
}

export default Profile
