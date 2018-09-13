<template>
  <div id="timeline">
    <h2>Facebook</h2>
    <a>timline設置予定</a>
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

#timeline h3{
  border-bottom: 1px solid #006400;
  margin-left: 5px;
  padding-left: 5px;
  width: 60vw;
}

#timeline h4{
  background-color: red;
}

#timeline p{
  margin-left: 20px;
  margin-right: 10vw;
}

#timeline h4{
  margin-left: 20px;
}

a:link{
  color: #008000;
}
a:visited{
  color: #556b2f;
}
</style>
