<template>
  <div class="hero">
    <p><router-link to="/add"  class="btn btn-primary">添加英雄</router-link></p>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>英雄名称</th>
          <th>英雄性别</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}} </td>
          <td> {{item.heroName}} </td>
          <td>{{item.gender}}</td>
          <td>{{item.cTime | time}}</td>
          <td>
            <button @click="upd(item.id)" class="btn btn-success">编辑</button>
            &nbsp;
            <button @click="del(item.id)" class="btn btn-danger">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
  created () {
    this.getList()
  },
  filters:{
    time (val){
      return moment(val).format('YYYY年MM月DD日 HH:mm:ss')
    }
  }
  ,
  methods:{
    getList(){
      axios.get().then(res=>{
        // console.log(res.data)
        this.list=res.data
      })
    },
    del(id){
        if(confirm('确定要删除吗?')){
        axios.delete(`/${id}`).then(res=>{
          // console.log(res.data)
          this.getList()
        })
        }
    },
    upd(id){
      this.$router.push(`./upd/${id}`)
    }
  
  }
  ,
  data(){
    return {
      list:[]
    }
  }
}
</script>