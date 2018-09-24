<template>
  <div id="announcement">
    <h2>イベント報告</h2>
    <div class="pdf">
      <a href="/static/doc/17th_jamboree.pdf">
        <pdf src="/static/doc/17th_jamboree.pdf"></pdf>
      </a>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'

export default {
  components: {
    pdf
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
