<template>
  <div id="target">
    <table class="type09">
      <thead>
        <tr>
          <th scope="cols">役職</th>
          <th scope="cols">名前</th>
          <th scope="cols">よみ</th>
          <th scope="cols">電話番号</th>
          <th scope="cols">種別</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, key, index) in rows" :key="index">
          <th scope="row">{{ row.rank }}</th>
          <td>{{ row.name }}</td>
          <td>{{ row.name_hira }}</td>
          <td>{{ row.number }}</td>
          <td>{{ row.type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

const getData = async () => {
  const response = await axios
    .get(`${process.env.backendApi}?type=address`)
  return response.data
}

export default {
  name: 'address',
  data () {
    return {
      rows: []
    }
  },
  async created() {
    this.rows = await getData()
  },
}
</script>

<style>
#target{
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}

table.type09 {
  border-collapse: collapse;
  text-align: center;
  line-height: 1.5;
  word-break: keep-all;
  font-size: 1.5vw;
}
table.type09 thead th {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  color: #005600;
  border-bottom: 3px solid #008000;
}
table.type09 tbody th {
  width: 150px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  background: #f3f7f3;
}
table.type09 td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
}
</style>
