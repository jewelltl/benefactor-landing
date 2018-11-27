import { BaseModel } from '@/models/base'

class Subscribe extends BaseModel {
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
      create: 'email-subscribe'
    }
  }
}

export { Subscribe }
