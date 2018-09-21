<template>
  <div id="about">
    <introduction/>
    <teamnav/>
    <vow/>
    <greeting/>
  </div>
</template>

<script>
import introduction from './about/introduction'
import teamnav from './about/teamnav'
import vow from './about/vow'
import greeting from './about/greeting'

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
