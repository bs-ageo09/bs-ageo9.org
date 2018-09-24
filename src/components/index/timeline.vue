<template>
  <div id="timeline">
    <h2>Facebook</h2>
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FbsAgeoTroop9%2F&tabs=timeline&width=300&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=226189591572624"
      width="300"
      height="800"
      style="border:none;overflow:hidden"
      scrolling="no"
      frameborder="0"
      allowTransparency="true"
      allow="encrypted-media">
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  data () {
    return {
    }
  }
}
</script>

<style>
#timeline h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}
</style>
