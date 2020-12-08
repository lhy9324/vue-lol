<template>
    <div class="hero-add">
    <legend>添加英雄</legend>
    <div class="form-group">
      <label>英雄名称</label>
      <input type="text" v-model="name" class="form-control" />
    </div>
    <div class="form-group">
      <label>英雄性别</label>
      <div>
        <input type="radio" v-model="sex" value="男"> 男
        <input type="radio"  v-model="sex" value="女"> 女
      </div>
    </div>
    <button @click="add" class="btn btn-primary">提交</button>
  </div>
</template>

<script> 
import axios from 'axios'
export default {
   
    data(){
        return {
            name:"",
            sex:"男"
        }
    },
    methods:{
        add(){
            axios.post({
                heroName:this.name,gender:this.sex,cTime:new Date()})
                .then(res=>{
                    // console.log(res.data)
                    this.$router.push('/hero')
                })
        }
    }
}
</script>

<style>

</style>