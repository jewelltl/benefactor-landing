<template>
  <div>
    <header class="hero-section" id="hero-section">         
      <b-navbar toggleable="lg" type="light" variant="light" :class="{affix: affix}">
        <b-container>
          <b-navbar-brand href="#">
            <img class="logo" src="@/assets/img/logo_main.svg" alt="Alpha">
          </b-navbar-brand>

          <b-collapse is-nav id="nav_collapse">          
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Blog</b-nav-item>
              <li class="nav-item">
                <b-button @click="showJoin" class="btn btn-primary">Join beta</b-button>              
              </li>
              <li class="nav-item"> <a class="btn btn-primary" href="#">Login</a> </li>
            </b-navbar-nav>
          </b-collapse>
          <b-navbar-toggle target="nav_collapse" @click="hamburgerAnimation" :class="{'hamburger-active': hamburgerActive}">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span> 
          </b-navbar-toggle>
        </b-container>        
      </b-navbar>
      
      <section class="hero-welcome-message text-center">
        <b-container>
          <b-row>          
            <b-col lg="12">
              <h1>Open source media player</h1>
              <h2>Coming soon on android and ios</h2>          
              <img src="@/assets/img/hero-img.svg" alt="hero-img" class="text-center hero-img">
            </b-col>                    
          </b-row>
        </b-container>
      </section>
    </header>        
  </div>
</template>

<script>

export default {
  name: 'Header',
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
    showJoin () {
      this.$root.$emit('open-join-modal')
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

