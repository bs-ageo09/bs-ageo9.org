<template>
  <div class="index">
    <indexcatch/>
    <ul class="wrapper">
      <li class="item">
        <information/>
      </li>
      <li class="sbar">
        <timeline/>
      </li>
    </ul>
  </div>
</template>

<script>
import indexcatch from './index/indexcatch'
import information from './index/information'
import timeline from './index/timeline'

export default {
  components: {
    indexcatch,
    information,
    timeline
  },
  name: 'index',
  data () {
    return {
    }
  }
}
</script>

<style>
.wrapper{
  list-style-type: none;
  overflow: hidden;
}

@media screen and (min-width:990px){
  .wrapper{
    display: block;
  }

  .item{
    float: left;
  }

  .sbar{
    float: right;
    margin-right: 10vw;
  }
}

#index ul li{
  list-style-type: none;
}
</style>
