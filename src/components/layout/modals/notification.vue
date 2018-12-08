<template>
  <b-modal
    v-model="showModal"    
    size="sm"
    ok-only
  >
    <h1 v-if="error" :class="{'text-danger': error}">{{error_msg}}</h1>
    <h1 v-else>Thank you<br/>for requesting the invite!</h1>
  </b-modal>
</template>

<script>
export default {
  name: 'NotificationModal',
  data () {
    return {
      showModal: false,
      error: false,
      error_msg: ''
    }
  },
  created () {
    this.$root.$on('open-result-modal', (err) => {
      if (err) {
        this.error_msg = err === 'Duplicate resource or resource already exists' ? 'Your email is already in our invite list.' : err
        this.error = true
      }
      this.showModal = true
    })
  }
}
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 24px;    
  }
</style>
