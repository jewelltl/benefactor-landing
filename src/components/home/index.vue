<template>
  <div>
    <Welcome/>
    <LearnMore/>
    <CTA/>
  </div>
</template>

<script>
import Welcome from './welcome'
import CTA from './cta'
import LearnMore from './learn-more'

export default {
  name: 'Home',
  components: {
    Welcome,
    LearnMore,
    CTA
  }
}
</script>
