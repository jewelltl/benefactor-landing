import { BaseModel } from '@/models/base'

class Subscriber extends BaseModel {
  defaults () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      role: 4
    }
  }

  routes () {
    return {
      save: 'email-subscribe'
    }
  }
}

export { Subscriber }
