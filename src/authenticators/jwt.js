module.exports = {
  request: function (req, token) {
    let headers = {
      'Authorization': `Authorization: Bearer ${token}`,
      'x-confirm-token': `${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    this.options.http._setHeaders.call(this, req, headers)
  },
  response: function ({body: { jwt }}) {
    return jwt
  }
}
