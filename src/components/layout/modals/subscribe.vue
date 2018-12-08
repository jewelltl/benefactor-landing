<template>
    <b-modal
      v-model="showModal"
      title="Request invite"
      hide-footer
      @hidden="onHidden"
      >      
      <header class="join-modal-header">        
        <h3>Choose your role</h3>
      </header>      
      <div class="contact-form">
        <b-form
          @submit.stop.prevent="onSubmit"          
          ref="subscribeForm"
        >
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
              :class="{'is-invalid': errors.has('first name')}"
              v-validate="'required'"
              data-vv-name="first name"
            ></b-form-input>
            <b-form-invalid-feedback>
              {{errors.first('first name')}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-form-input
              type="text"
              v-model="form.lastName"
              class="input-lg"
              :class="{'is-invalid': errors.has('last name')}"
              placeholder="Last Name"
              v-validate="'required'"
              data-vv-name="last name"
            ></b-form-input>
            <b-form-invalid-feedback>
              {{errors.first('last name')}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-form-group>
            <b-form-input
              type="email"
              v-model="form.email"
              class="input-lg"
              :class="{'is-invalid': errors.has('email')}"
              placeholder="Email"
              v-validate="'required|email'"
              data-vv-name="email"
            ></b-form-input>
            <b-form-invalid-feedback>
              {{errors.first('email')}}
            </b-form-invalid-feedback>
          </b-form-group>
          <b-button class="btn btn-primary" type="submit">Request Invite</b-button>
        </b-form>        
      </div>
    </b-modal>
</template>

<script>
import { Subscriber } from '@/models/subscriber'
import validateMixin from '@/mixins/validate'
export default {
  name: 'SubscribeModal',
  mixins: [validateMixin],
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
        {text: 'School', value: 1},
        {text: 'Bussiness', value: 2}
      ],
      subscriber: new Subscriber()
    }
  },
  created () {
    this.$root.$on('open-join-modal', () => {
      this.showModal = true
    })
  },
  methods: {
    clearForm () {
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.role = 4
      this.errors.clear()
    },
    onSubmit () {
      this.$validator
        .validateAll()
        .then(res => {
          if (res) {
            this.subscriber.post('email-subscribe', this.form).then((resp) => {
              this.$snotify.success('Thank you for requesting the invite!', 'Succeed')
              this.clearForm()
              this.showModal = false
            }, (err) => {
              this.$snotify.error(err, 'Failure')
            })
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    onHidden () {
      this.clearForm()
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
      margin-top: 0.5rem;
    }
  }
  .contact-form {
    text-align: center;
    .form-group {      
      margin-bottom: 1.5rem;      
    }
  }
  .invalid-feedback {
    display: block;
  }
</style>
