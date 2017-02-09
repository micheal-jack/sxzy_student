<template>
<div>{{title}}
<ul>
	<li v-for="item in course_list">
		<router-link :to="{ name: 'CourseDetailCatelog', params:{id:item.course_id} }">{{item.course_id}} - {{item.course_title}}</router-link>
	</li>
</ul>
</div>
</template>

<script>
export default {
  name: 'my_course',
  data () {
    return {
    	title:'我的课程列表',
    	course_list:[
    		{course_id:1,course_title:'一年级语文（上）'},
    		{course_id:2,course_title:'一年级数学（上）'},
    		{course_id:3,course_title:'一年级英语（上）'},
    		{course_id:4,course_title:'一年级自然（上）'},
    		{course_id:5,course_title:'一年级美术（上）'},
    	]
    }
  }
}
</script>

<style scoped>

</style>