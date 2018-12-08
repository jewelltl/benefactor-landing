<template>
  <b-modal
    v-model="showModal"
    :title="title"
    hide-footer    
  >
    <div class="modal-form-wrapper">
      <login
        v-if="indexParam=='login'"
        :indexParam="indexParam"
        v-on:indexChanged="indexChanged"
      />
      <register
        v-else-if="indexParam=='register'"
        :indexParam="indexParam"
        v-on:indexChanged="indexChanged"
      />
      <reset
        v-if="indexParam=='reset'"
        :indexParam="indexParam"
        v-on:indexChanged="indexChanged"
      />
    </div>
  </b-modal>
</template>

<script>
import Login from './login'
import Register from './register'
import Reset from './reset'
export default {
  name: 'AuthModal',
  components: {
    Login,
    Register,
    Reset
  },
  data () {
    return {
      showModal: false,
      indexParam: '',
      title: ''
    }
  },
  created () {
    this.$root.$on('show-auth-modal', (key) => {
      this.showModal = true
      this.indexParam = key
      switch (key) {
        case 'login':
          this.title = 'Sign In'
          break
        case 'register':
          this.title = 'Create an account'
          break
        default:
          this.title = 'Forget Password'
      }
    })
    this.$root.$on('close-auth-modal', () => {
      this.showModal = false
    })
  },
  methods: {
    indexChanged (data) {
      this.indexParam = data
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-form-wrapper {
    padding-top: 1.5rem;
    text-align: center;
  }
</style>
