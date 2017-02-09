<template>
<div>
<p>{{title}}</p>
<p>课程ID：{{course_id}}</p>
<router-link :to="{ name: 'CourseDetailCatelog', params:{id:course_id} }">目录</router-link>
<router-link :to="{ name: 'CourseDetailThread', params:{id:course_id} }">问题</router-link>
<router-link :to="{ name: 'CourseDetailNote', params:{id:course_id} }">笔记</router-link>
<router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'course_detail',
  mounted(){
  	console.log(1111)
  },
  data () {
  	var course_id = this.$route.params.id
    return {
    	title:'课程详情页',
    	course_id:course_id,
    }
  }
}
</script>

<style scoped>

</style>