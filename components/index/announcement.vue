<template>
  <div id="announcement">
    <h2>イベント報告</h2>
    <embed
      src="/doc/17th_jamboree.pdf#page=1"
      type="application/pdf"
      width="100%" height="450"
    />
  </div>
</template>

<script>
export default {
  components: {
  },
  name: 'announcement',
  data () {
    return {
    }
  }
}
</script>

<style>
#announcement h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

.pdf{
  width: 300px;
}
</style>
