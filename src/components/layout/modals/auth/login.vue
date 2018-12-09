<template>
  <div>
    <b-form
      @submit.stop.prevent="onSubmit"
      ref="loginForm"      
    >
      <b-form-group>
        <b-form-input
          type="email"
          v-model="form.email"
          class="input-lg"
          placeholder="Email"
          data-vv-name="email"
          v-validate="'required|email'"
          :class="{'is-invalid': errors.has('email')}"
        ></b-form-input>
        <b-form-invalid-feedback>
          {{errors.first('email')}}
        </b-form-invalid-feedback>
      </b-form-group>
      <b-form-group>
        <b-form-input
          type="password"
          v-model="form.password"
          class="input-lg"
          placeholder="Password"
          data-vv-name="password"
          :class="{'is-invalid': errors.has('password')}"
          v-validate="'required|min:6'"
        ></b-form-input>
        <b-form-invalid-feedback>
          {{errors.first('password')}}
        </b-form-invalid-feedback>
      </b-form-group>
      <p>
        <a href="#" @click.prevent="reset">Forget password?</a>
      </p>
      <b-button type="submit" variant="primary">Continue</b-button>
      <p>Don't have an Account?</p>
      <a href="#" @click.prevent="register">Sign up</a>
    </b-form>
  </div>
</template>
<script>
import validateMixin from '@/mixins/validate'
// import JwtDecode from 'jwt-decode'
export default {
  name: 'Login',
  mixins: [validateMixin],
  props: ['indexParam'],
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  created () {
    this.$root.$on('show-auth-modal', () => {
      this.clearForm()
    })
  },
  methods: {
    clearForm () {
      this.form.email = ''
      this.form.password = ''
      this.errors.clear()
    },
    onSubmit () {
      this.$validator
        .validateAll()
        .then(res => {
          // this.$auth.login({
          //   params: {
          //     auth: this.auth
          //   },
          //   success: function (a) {
          //     console.log('success')
          //     console.log(a)
          //   },
          //   error: function (e) {
          //     console.log('error')
          //     console.log(e)
          //   },
          //   rememberMe: true,
          //   fetchUser: true
          // })
          this.$http.post('token', this.form).then(res => {
            this.$toast.success({
              title: 'Succeed',
              message: 'You logged in successfully!'
            })
          }).catch(err => {
            if (err.status === 401 || err.status === 403) {
              this.$toast.error({
                title: 'Failure',
                message: err.body.error.message
              })
            } else if (err.status === 412) {
              console.log(err)
              localStorage.setItem('auth_token', err.body.verifyToken)
              localStorage.setItem('current_user', JSON.stringify(err.body.user))
              this.$store.dispatch('auth/authenticated')
              this.$toast.info({
                title: 'Information',
                message: 'You need to complete your information.'
              })
            } else {
              this.$toast.error({
                title: 'Failure',
                message: 'Something went wrong'
              })
            }
          })
        })
        .catch(e => {
          console.log(e)
        })
    },
    reset () {
      this.$emit('indexChanged', 'reset')
    },
    register () {
      this.$emit('indexChanged', 'register')
    },
    closeModal () {
      this.$root.$emit('close-auth-modal')
    }
  }
}
</script>
<style scoped lang="scss">
  p {
    margin-top: 2.2rem;
  }
  button {
    margin-top: 1rem;
  }
  .invalid-feedback {
    display: block;
  }
</style>