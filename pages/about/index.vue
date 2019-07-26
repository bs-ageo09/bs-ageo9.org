<template>
  <div id="about">
    <introduction/>
    <teamnav/>
    <vow/>
    <greeting/>
  </div>
</template>

<script>
import introduction from '@/components/about/introduction'
import teamnav from '@/components/teamnav'
import vow from '@/components/about/vow'
import greeting from '@/components/about/greeting'

export default {
  components: {
    introduction,
    teamnav,
    vow,
    greeting
  },
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<style>
#about {
  padding-left: 5vw;
  margin-right: 5vw;
}
</style>
