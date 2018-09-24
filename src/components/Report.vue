<template>
  <div id="report">
    <teamnav/>
  </div>
</template>

<script>
import teamnav from './teamnav'

export default {
  components: {
    teamnav
  },
  name: 'report',
  data () {
    return {
    }
  }
}
</script>

<style>
#report {
  padding-left: 5vw;
  margin-right: 5vw;
}
</style>
