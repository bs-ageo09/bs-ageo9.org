<template>
  <div id="about">
    <introduction/>
    <teamnav/>
    <vow/>
    <greeting/>
  </div>
</template>

<script setup>
import introduction from '@/components/about/introduction'
import teamnav from '@/components/teamnav'
import vow from '@/components/about/vow'
import greeting from '@/components/about/greeting'
</script>

<style>
#about {
  padding-left: 5vw;
  margin-right: 5vw;
}
</style>
