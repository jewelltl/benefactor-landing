<template>
  <div>
    <auth-modal/>
    <notification-modal/>
    <header>
      <b-navbar toggleable="lg" type="light" variant="light" :class="{affix: affix}">
        <b-container>
          <b-navbar-brand href="#">
            <img class="logo" src="@/assets/img/logo_main.svg" alt="Alpha">
          </b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Blog</b-nav-item>
              <li class="nav-item">
                <b-button class="btn btn-primary" @click="showAuth('register')">Join beta</b-button>
              </li>
              <li class="nav-item"> <b-button class="btn btn-primary" @click="showAuth('login')">Login</b-button> </li>
            </b-navbar-nav>
          </b-collapse>
          <b-navbar-toggle target="nav_collapse" @click="hamburgerAnimation" :class="{'hamburger-active': hamburgerActive}">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span> 
          </b-navbar-toggle>
        </b-container>
      </b-navbar>
    </header>
  </div>
</template>
<script>

import NotificationModal from '@/components/layout/modals/notification'
import AuthModal from '@/components/layout/modals/auth'

export default {
  name: 'Header',
  components: {
    NotificationModal,
    AuthModal
  },
  data () {
    return {
      affix: false,
      hamburgerActive: false
    }
  },
  methods: {
    handleScroll (event) {
      if (window.scrollY) {
        this.affix = true
      } else {
        this.affix = false
      }
    },
    hamburgerAnimation () {
      this.hamburgerActive = !this.hamburgerActive
    },
    showAuth (key) {
      this.$root.$emit('show-auth-modal', key)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted () {
    window.document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', this.hamburgerAnimation)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style>
  .navbar-toggler{
    position: fixed;
    top: 20px;
    right: 25px;
  }
</style>

