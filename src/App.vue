<template>
  <div id="app">
    <appheader/>
    <appnav/>
    <router-view/>
    <appcopl/>
  </div>
</template>

<script>
import 'normalize.css'

import appheader from './components/appheader'
import appnav from './components/appnav'
import appcopl from './components/appcopl'

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
