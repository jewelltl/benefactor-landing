<template>
  <div>
    <Header/>    
    <LearnMore/>
    <CTA/>
    <Footer/>
    <JoinModal/>
    <ResultModal/>
  </div>
</template>

<script>
import Header from './layout/header'
import LearnMore from './layout/learn-more'
import CTA from './layout/cta'
import Footer from './layout/footer'
import JoinModal from '@/components/layout/modal/join'
import ResultModal from '@/components/layout/modal/result'

export default {
  name: 'Home',
  components: {
    Header,
    LearnMore,
    CTA,
    Footer,
    JoinModal,
    ResultModal
  }
}
</script>
