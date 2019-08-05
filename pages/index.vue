<template>
  <div class="index">
    <indexcatch/>
    <ul class="wrapper">
      <li class="item">
        <information :events="events"/>
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
import axios from 'axios'

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
      events: []
    }
  },
  async asyncData({ app }) {
    const response = await axios.get('https://sheetdb.io/api/v1/q36cbrq9l9mna')
    return {
      events: response.data
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
