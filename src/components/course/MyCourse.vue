<template>
<div>
	<cui-navbar v-on:back="back" :title="title"></cui-navbar>
	<a v-on:click="showCategoryList" class="menu-button">
		 <i class="el-icon-menu large"></i>
	</a>
<!-- <ul>
	<li v-for="item in course_list">
		<router-link :to="{ name: 'CourseDetailCatelog', params:{id:item.course_id} }">{{item.course_id}} - {{item.course_title}}</router-link>
	</li>
</ul> -->
</div>
</template>

<script>

	var data = {
		title:'我的课程',
		course_list:[
			{course_id:1,course_title:'一年级语文（上）'},
			{course_id:2,course_title:'一年级数学（上）'},
			{course_id:3,course_title:'一年级英语（上）'},
			{course_id:4,course_title:'一年级自然（上）'},
			{course_id:5,course_title:'一年级美术（上）'},
		]
	}

	export default {
	  name: 'my_course',
	  data () {
	    return data
	  },
		methods: {
			back: function (evt) {
				console.log("back btn click");
			},
			showCategoryList: function (evt) {
				console.log("show category list");
			}
		}
	}
</script>

<style scoped>
	.menu-button{
		width: 45px;
		height: 45px;
		position: absolute;
		top: 25px;
		right: 20px;
	}

	.large{
		font-size: 36px;
	  color: rgba(102, 102, 102, 0.5);
	}

</style>
