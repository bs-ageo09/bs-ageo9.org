<template>
  <div id="app">
    <appheader/>
    <appnav/>
    <slot/>
    <appcopl/>
  </div>
</template>



<script>
import 'normalize.css'

import appheader from '@/components/layouts/appheader'
import appnav from '@/components/layouts/appnav'
import appcopl from '@/components/layouts/appcopl'

export default {
  components: {
    appheader,
    appnav,
    appcopl
  },
  name: 'app'
}
</script>

<style>
</style>
