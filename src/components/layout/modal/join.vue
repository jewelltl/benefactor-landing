<template>
    <b-modal
      v-model="showModal"
      title="Request invite"
      hide-footer
      >      
      <header class="join-modal-header">        
        <h3>Choose your role</h3>
      </header>      
      <div class="contact-form">
        <b-form @submit="onSubmit">
          <b-form-group class="chooseUserType">
            <b-form-radio-group
              buttons
              size="sm"
              button-variant="outline-primary"
              v-model="form.role"              
              :options="roles"              
            />
          </b-form-group>
          <b-form-group>
            <b-form-input
              type="text"
              v-model="form.firstName"
              placeholder="First Name"
              class="input-lg"
              :state="firstName_state"
            ></b-form-input>
            <b-form-invalid-feedback v-if="firstName_state == false">
              This field can't be blank
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-form-input
              type="text"
              v-model="form.lastName"
              class="input-lg"
              placeholder="Last Name"
              :state="lastName_state"
            ></b-form-input>
            <b-form-invalid-feedback v-if="lastName_state == false">
              This field can't be blank
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-form-input
              type="email"
              v-model="form.email"
              class="input-lg"
              placeholder="Email"
              :state="email_state"
            ></b-form-input>
            <b-form-invalid-feedback v-if="email_state == false">
              {{email_error_msg}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-button class="btn btn-primary" type="submit">Request Invite</b-button>
        </b-form>        
      </div>

    </b-modal>
</template>

<script>
import { Subscriber } from '@/models/subscriber'
export default {
  name: 'JoinModal',
  data () {
    return {
      showModal: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        role: 4
      },
      roles: [
        {text: 'Donor', value: 4},
        {text: 'NonProfit', value: 3},
        {text: 'School', value: 2},
        {text: 'Bussiness', value: 1}
      ],
      firstName_state: null,
      lastName_state: null,
      email_state: null,
      email_error_msg: 'Please, enter your email',
      subscriber: new Subscriber()
    }
  },
  created () {
    this.$root.$on('open-join-modal', () => {
      this.showModal = true
    })
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      console.log(this.subscriber)
      if (this.validateForm()) {
        fetch('https://onebenefactor.powercode.pro/api/v1/email-subscribe',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.form)
          }
        ).then(res => {
          return res.json()
        }).then(data => {
          if (data.error) {
            this.$root.$emit('open-result-modal', data.error.message)
          } else {
            this.$root.$emit('open-result-modal')
            this.form.firstName = ''
            this.form.lastName = ''
            this.form.email = ''
            this.form.role = 4
            this.showModal = false
          }
        })
        // this.subscriber.save(JSON.stringify(this.form)).then(resp => {
        //   console.log(resp)
        // })
        // this.subscriber.create(this.form).then(resp => {
        //   console.log(resp)
        // })
      }
    },
    validateForm () {
      let that = this

      let error = false
      if (!that.form.firstName) {
        that.firstName_state = false
        error = true
        setTimeout(() => {
          that.firstName_state = null
        }, 2500)
      }
      if (!that.form.lastName) {
        that.lastName_state = false
        error = true
        setTimeout(() => {
          that.lastName_state = null
        }, 2500)
      }
      if (!/\S+@\S+\.\S/.test(that.form.email)) {
        that.email_state = false
        error = true
        this.email_error_msg = !that.form.email ? 'Please, enter your email' : 'Email is not valid.'
        setTimeout(() => {
          that.email_state = null
        }, 2500)
      }
      return !error
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-header {
    border-bottom: none;
  }

  .join-modal-header {
    margin-bottom: 2.25rem;
    h3 {
      font-size: 1.2rem;
      font-weight: 400;
      text-align: center;
    }
  }
  .contact-form {
    text-align: center;
    .form-group {
      margin-bottom: 1.5rem;
      
    }
  }
</style>
