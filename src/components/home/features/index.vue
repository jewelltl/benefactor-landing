<template>
  <section class="features section-spacing" id="features">
    <b-container>
      <b-row>
        <b-col lg="5">
          <header class="section-header">
              <h2>Features</h2>
              <h3>Best cross platform video player</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel porttitor mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eros justo, blandit nec neque at, ullamcorper convallis massa.</p>
          </header>
        </b-col>
        <b-col lg="7">
          <ul class="row features-list text-center">
            <!--features 1-->
            <li class="col-md-6"> <img src="@/assets/img/feature-1.svg" alt="features">
              <h4>Gestures control</h4>
            </li>
            <!--features 1 end--> 
            
            <!--features 2-->
            <li class="col-md-6"> <img src="@/assets/img/feature-2.svg" alt="features">
              <h4>Supports subtitles</h4>
            </li>
            <!--features 2 end--> 
            
            <!--Force next columns to break to new line at md breakpoint and up-->
            <li class="w-100 d-none d-md-block"></li>
            
            <!--features 3-->
            <li class="col-md-6"> <img src="@/assets/img/feature-3.svg" alt="features">
              <h4>Closed captions</h4>
            </li>
            <!--features 3 end--> 
            
            <!--features 4-->
            <li class="col-md-6"> <img src="@/assets/img/feature-4.svg" alt="features">
              <h4>Network streams</h4>
            </li>
            <!--features 4 end-->
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: 'Features'
}
</script>
