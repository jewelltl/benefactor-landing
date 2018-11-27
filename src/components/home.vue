<template>
  <div>
    <Header/>
    <Features/>
    <FeatureMore/>
    <CTA/>
    <Footer/>
    <JoinModal/>
    <ResultModal/>
  </div>
</template>

<script>
import Header from './layout/header'
import Features from './layout/features'
import FeatureMore from './layout/features-more'
import CTA from './layout/cta'
import Footer from './layout/footer'
import JoinModal from '@/components/layout/modal/join'
import ResultModal from '@/components/layout/modal/result'

export default {
  name: 'Home',
  components: {
    Header,
    Features,
    FeatureMore,
    CTA,
    Footer,
    JoinModal,
    ResultModal
  }
}
</script>
