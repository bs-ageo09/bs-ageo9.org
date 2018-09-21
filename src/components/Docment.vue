<template>
  <div id="docment">
    <h2>資料</h2>
    <p>ここでは上尾9団に関する資料をご覧いただけます</p>
    <plan/>
  </div>
</template>

<script>
import plan from './docment/plan'

export default {
  components: {
    plan
  },
  name: 'docment',
  data () {
    return {
    }
  }
}
</script>

<style>
#docment h2{
  font-size: 30px;
  border-left: 5px solid #006400;
  padding: 5px;
}

#docment p{
  margin-left: 20px;
  margin-right: 10vw;
}

#docment {
  padding-left: 5vw;
  margin-right: 5vw;
}
</style>
