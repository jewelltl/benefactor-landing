<template>
  <div>
    <b-form
      @submit.prevent="onSubmit"
      ref="registerForm"      
    >
      <p>Choose your role</p>
      <b-form-group class="chooseUserType">
        <b-form-radio-group
          buttons
          size="sm"
          button-variant="outline-primary"
          v-model="form.role"
          :options="roles"
        />
      </b-form-group>
      <div class="input-forms">
        <b-form-group>
          <b-form-input
            type="email"
            v-model="form.email"
            class="input-lg"
            :class="{'is-invalid': errors.has('email')}"
            placeholder="Email"
            data-vv-name="email"
            v-validate="'required|email'"
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
            :class="{'is-invalid': errors.has('password')}"
            placeholder="Password"
            v-validate="'required|min:6|max:35'"
            data-vv-name="password"
            ref="password"
          ></b-form-input>
          <b-form-invalid-feedback>
            {{errors.first('password')}}
          </b-form-invalid-feedback>
        </b-form-group>
        <b-form-group>
          <b-form-input
            type="password"
            v-model="form.passwordConfirmation"
            class="input-lg"
            placeholder="Password Confirmation"
            :class="{'is-invalid': errors.has('password confirmation')}"
            data-vv-name="password confirmation"
            v-validate="'required|confirmed:password'"
          ></b-form-input>
          <b-form-invalid-feedback>
            {{errors.first('password confirmation')}}
          </b-form-invalid-feedback>
        </b-form-group>
      </div>
      <b-alert
        dismissible
        variant="danger"
        :show="errs.length >= 1"
      >
        <p
          v-for="(error, index) in errs" :key="index"
        >
          {{error.message}}
        </p>
      </b-alert> 
      <b-button type="submit" variant="primary">Continue</b-button>
      <p>
        Already have an Account?
      </p>
      <a @click.prevent="login" href="#">Sign in</a>
    </b-form>
  </div>
</template>
<script>
import validateMixin from '@/mixins/validate'
export default {
  name: 'Login',
  mixins: [validateMixin],
  props: ['indexParam'],
  data () {
    return {
      form: {
        email: '',
        password: '',
        passwordConfirmation: '',
        role: 2
      },
      roles: [
        {text: 'Business', value: 2},
        {text: 'Nonprofit', value: 3},
        {text: 'Donor', value: 4}
      ],
      genders: [
        {text: 'Male', value: 'male'},
        {text: 'Female', value: 'female'}
      ],
      errs: [],
      options: {
        format: 'YYYY-MM-DD',
        useCurrent: false
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
      this.form.passwordConfirmation = ''
      this.errors.clear()
    },
    onSubmit () {
      this.$validator
      .validateAll()
      .then(valid => {
        if (valid) {
          this.$http.post('token/request', this.form).then(resp => {
            this.$snotify.success('Verification email was sent to your inbox!', 'Succeed')
            this.closeModal()
          }).catch(errs => {
            if (typeof errs.body.error !== 'undefined') {
              this.$snotify.error(errs.body.error.message, 'Failure')
            } else {
              this.$snotify.error('Something went wrong', 'Failure')
            }
          })
        }
      })
      .catch(e => {
        console.log(e)
      })
    },
    login () {
      this.$emit('indexChanged', 'login')
    },
    closeModal () {
      this.$root.$emit('close-auth-modal')
    }
  }
}
</script>
<style lang="scss" scoped>
  .input-forms {
    margin: 2.5rem 0;
  }
  button[type="submit"] {
    margin-bottom: 1rem;
  }
  .invalid-feedback {
    display: block;
  }
</style>