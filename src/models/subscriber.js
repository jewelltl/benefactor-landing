import { BaseModel } from '@/models/base'

class Subscriber extends BaseModel {
  defaults () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      role: 4
    }
  }

  routes () {
    return {
      create: 'email-subscribe'
    }
  }
}

export { Subscriber }
