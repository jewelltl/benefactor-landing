import Vue from 'vue'
import { Model, Collection } from 'vue-mc'
import _ from 'lodash'

class BaseModel extends Model {
  getRequest (config) {
    config.baseURL = Vue.http.options.root
    config.headers = Vue.http.options.headers
    config.validateStatus = function (status) {
      if (status === 401) {
        console.log('authorization failure')
        return false
      }
      return status >= 200 && status < 300
    }
    return super.getRequest(config)
  }

  options () {
    return {
      patch: true
    }
  }

  getFetchURL () {
    return Vue.http.options.root
  }

  _customRequest (path, method = 'post', data = {}) {
    let config = {
      url: [this.getFetchURL(), path].join('/'),
      method,
      data
    }

    return new Promise((resolve, reject) => {
      this.getRequest(config).send().then((response) => {
        this.assign(response.getData())
        resolve(this)
      }, (e) => {
        console.error('[_customRequest] Error: ', e)
        let errors = e.response.response.data.errors || e.response.response.data.error
        let err = errors.message || e.message || 'Something went wrong'
        reject(err)
      })
    })
  }

  deleteRecord (path) {
    return this._customRequest(path, 'delete')
  }

  post (path, data = {}) {
    return this._customRequest(path, 'post', data)
  }
}

class BaseCollection extends Collection {
  getFetchURL () {
    return Vue.http.options.root
  }
  getRequest (config) {
    config.baseURL = Vue.http.options.root
    config.headers = Vue.http.options.headers
    config.validateStatus = function (status) {
      if (status === 401) {
        console.log('authorization failure')
        return false
      }
      return status >= 200 && status < 300
    }
    return super.getRequest(config)
  }

  getSaveData () {
    let upd = _.chain(this.models)
      .filter(m => !m.isNew() && !_.isEmpty(m.getSaveData()))
      .map((m) => {
        let changes = m.getSaveData()
        return { id: m.id, ...changes }
      })
      .value()

    let add = _.chain(this.models)
      .filter(m => m.isNew())
      .map(m => m.attributes)
      .filter(m => !_.isEmpty(m))
      .value()

    let del = _.chain(this.getDeletingModels())
      .map('id')
      .value()

    return { add, upd, del }
  }

  fetchWithFilter (filter = {}) {
    if (!this.getFetchURL()) {
      console.error('Fetch url was not provided')
      return
    }

    let config = {
      url: this.getFetchURL(),
      params: filter
    }

    return new Promise((resolve, reject) => {
      this.getRequest(config).send().then((response) => {
        this.replace(response.getData())
        Vue.set(this, 'loading', false)
        resolve(this)
      }, (e) => {
        Vue.set(this, 'loading', false)
        let errors = e.response.response.data.errors
        let err = (errors && errors[0].detail) || 'Something went wrong'
        reject(err)
      })
    })
  }
}

export { BaseModel, BaseCollection }
