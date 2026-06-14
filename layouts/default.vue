<template>
  <div id="app">
    <appheader/>
    <appnav/>
    <slot/>
    <appcopl/>
  </div>
</template>



<script setup>
import 'normalize.css'

import appheader from '@/components/layouts/appheader'
import appnav from '@/components/layouts/appnav'
import appcopl from '@/components/layouts/appcopl'
</script>

<style>
</style>
