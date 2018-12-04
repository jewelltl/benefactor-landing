<template>    
  <footer class="site-footer section-spacing">
    <b-container>
      <b-row>
        <b-col lg="12" class="text-center">
          <img src="@/assets/img/logo_main.svg" alt="logo">
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4">
          <ul class="terms-privacy">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </b-col>
        <b-col lg="4">
          <p> © 2018 Alpha. All rights reserved.</p>
        </b-col>
        <b-col lg="4">
          <ul class="social">                        
            <li><a href="#"><i class="fab fa-twitter fa-lg"></i></a></li>
            <li><a href="#"><i class="fab fa-facebook-f fa-lg"></i></a></li>
            <li><a href="#"><i class="fab fa-github-alt fa-lg"></i></a></li>
            <li><a href="#"><i class="fab fa-stack-overflow fa-lg"></i></a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
