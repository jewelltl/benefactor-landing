<template>
  <div>
    <div class="loader" v-if="!loaded">
      <img class="logo" src="@/assets/img/logo_main.svg" alt="Alpha">
      <span>Loading ...</span>
    </div>
    <div id="main" v-else>
      <Header/>
      <router-view></router-view>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

export default {
  name: 'main-index',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    let that = this
    setTimeout(() => {
      that.loaded = true
    }, 1000)
  }
}
</script>
<style lang="scss">
  .loader {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      padding: 32px;
    }
  }
</style>
