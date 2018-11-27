<template>
    <section class="cta section-spacing"> 
  
        <!--CTA svg animation-->
        
        <svg width="100%" height="300px" viewBox="0 0 1200 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g class="curve" stroke="#fff" fill="none" fill-rule="evenodd" transform="translate(0,90)">
            <path id="glowPath" d="M 0, 60 S 300, -60, 600, 60, 800, -120, 1200 60"/>
            <path d="M 0, 60 S 200, -60, 400, 60, 900, -120, 1200 60"/>
            <path d="M 0, 60 S 200, -70, 400, 70, 800, -120, 1200 60"/>
            </g>
        </svg>
        <!--CTA svg animation end-->
        <b-container>
            <b-row>
                <b-col lg="8">
                    <header class="section-header">
                        <h2>Get started</h2>
                        <h3>Be among the first to try the app</h3>
                    </header>
                </b-col>
                <b-col lg="4">
                    <div class="cta-button"><a class="btn btn-primary" href="#hero-section" role="button">Join the waiting list</a></div>
                </b-col>
            </b-row>
        </b-container>        
    </section>

</template>

<script>
export default {
  name: 'CTA'
}
</script>
