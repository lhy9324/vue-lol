<template>
  <div class="hero-add">
    <legend>编辑英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" v-model="obj.heroName" class="form-control"/>
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input type="radio" v-model="obj.gender" value="男"> 男
        <input type="radio"  v-model="obj.gender" value="女"> 女
      </div>
    </div>
    <button @click="upd" class="btn btn-primary">提交</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
     this.id= this.$route.params.id
    axios.get(`/${this.id}`).then(res=>{
        // console.log(res.data)
        this.obj=res.data
    })      
  },
  data () {
    return {
        id:'',
        obj:'',
    }
  },
  methods: {
      upd(){
          axios.put(`/${this.id}`,this.obj).then(res=>{
            //   console.log(res.data)
             this.$router.push('/hero')
          })
      }
  }
}
</script>