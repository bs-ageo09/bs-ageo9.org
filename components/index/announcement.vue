<template>
  <div id="announcement">
    <h2>イベント報告</h2>
    <iframe :src='`${this.path}#page=1`' height="400" frameborder="0"></iframe>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const getData = async () => {
  const response = await axios
    .get(`${process.env.backendApi}?type=other&key=announcement_pdf`)
  return response.data['val']
}

export default {
  components: {
  },
  name: 'announcement',
  data () {
    return {
      path: '',
    }
  },
  async created() {
    this.path = await getData()
  },
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
