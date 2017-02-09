<template>
 	<div>
 		<router-link :to="{ path: 'mycourse' }">课程</router-link>
 		<router-link :to="{ path: 'homework' }">作业</router-link>
 		<router-link :to="{ path: 'thread' }">问答</router-link>
 		<router-link :to="{ path: 'myclass' }">班级</router-link>
 		<router-link :to="{ path: 'class_schedule' }">课表</router-link>
 		<router-link :to="{ path: 'mynote' }">笔记</router-link>
 	</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
