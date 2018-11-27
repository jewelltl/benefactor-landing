<template>
  <div>
    <Header/>
    <Features/>
    <FeatureMore/>
    <CTA/>
    <Footer/>
  </div>
</template>

<script>
import Header from './layout/header'
import Features from './layout/features'
import FeatureMore from './layout/features-more'
import CTA from './layout/cta'
import Footer from './layout/footer'
export default {
  name: 'Home',
  components: {
    Header,
    Features,
    FeatureMore,
    CTA,
    Footer
  }
}
</script>
