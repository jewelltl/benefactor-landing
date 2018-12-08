<template>
  <div>
    <b-form
      @submit.stop.prevent="onSubmit"
      novalidate
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
      <b-button type="submit" variant="primary">Reset password</b-button>
      <p>
      	<a href="#" @click.prevent="login">Didn't forget your password?</a>	
      </p>
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
      this.errors.clear()
    },
    onSubmit () {
      this.$validator
        .validateAll()
        .then(res => {
          console.log(res)
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