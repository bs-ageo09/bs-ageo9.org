<template>
  <div class="index">
    <indexcatch/>
    <ul class="wrapper">
      <li class="item">
        <information/>
      </li>
      <li class="sbar">
        <timeline/>
        <announcement/>
      </li>
    </ul>
  </div>
</template>

<script>
import indexcatch from '@/components/index/indexcatch'
import information from '@/components/index/information'
import timeline from '@/components/index/timeline'
import announcement from '@/components/index/announcement'

export default {
  components: {
    indexcatch,
    information,
    timeline,
    announcement
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
