<template>
  <div id="indexcatch">
    <h1>冒険に出よう！</h1>
    <p>たくましさ 自主性</p>
    <p>協調性 社会性</p>
  </div>
</template>

<script>
export default {
  name: 'indexcatch',
  data () {
    return {
    }
  }
}
</script>

<style>
body{
  margin: 0;
}

#indexcatch{
  text-align: right;
  background: url('~/assets/img/catch.jpg') no-repeat left 5vw top;
  background-size: contain;
  background-color: #4f5030;
  padding: 5vw 3vw 10vw;
}

#indexcatch h1{
  color: #F9F9F9;
  font-size: 3vw;
}

#indexcatch p{
  color: #F9F9F9;
  font-size: 1.5vw;
}
</style>
