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
  name: 'App',
  components: {
    appheader,
    appnav,
    appcopl
  }
}
</script>

<style>
</style>
