<template>
<div class="course-page">
	<cui-navbar v-on:back="back" :title="title"></cui-navbar>
	<a v-on:click="showCategoryList" class="menu-button">
		 <i class="el-icon-menu large"></i>
	</a>
<!-- <ul>
	<li v-for="item in course_list">
		<router-link :to="{ name: 'CourseDetailCatelog', params:{id:item.course_id} }">{{item.course_id}} - {{item.course_title}}</router-link>
	</li>
</ul> -->
	<div class="content">
			<div v-for="item in course_list" class="item">

				<div class="item-top">
					<div class="elem avatar-group">
						<img class="avatar" width="60" height="60" src="static/img/avatar-finn.png" alt="">
						<p>张老师</p>
					</div>
					<div class="elem content-group">
						<p class="title">三年级语文(上)</p>
						<p class="description">请同学们预约课前导学及相关学习资源中的文件，上课前提问。请同学们做好准备，
							做好课前复习。请同学们预约课前导学及相关学习资源中的文件，上课前提问。
						</p>
					</div>
				</div>
				<div class="line"></div>
				<div class="item-bottom">
					 <a class="item-btn btn-tag"><i class="el-icon-star-on"></i></a>
					 <a class="item-btn btn-question"><i class="el-icon-warning"></i></a>
					 <router-link class="item-btn btn-router" :to="{ name: 'CourseDetailCatelog', params:{id:item.course_id} }">
					 		<button class="right" type="button" name="button">继续学习</button>
					 </router-link>
				</div>
			</div>
	</div>
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
	.course-page{
		margin: 0 0;
		overflow: hidden;
		min-height: 100%;
		/*background-color: #333;*/
	}
	.menu-button{
		width: 45px;
		height: 45px;
		position: absolute;
		top: 25px;
		right: 20px;
		cursor: pointer;
	}

	.large{
		font-size: 36px;
	  color: rgba(102, 102, 102, 0.5);
	}

	.item-btn {
		width: 36px;
		height: 36px;
		position: relative;
		float: left;
		margin: 10px 15px 16px 32px;
	}

	.btn-router {
		width: 136px;
		float: right;
		margin: 10px 25px 16px 10px;
	}

	.btn-tag {
		font-size: 30px;
		vertical-align: middle;
		text-align: center;
	}

	.btn-question {
		font-size: 30px;
		vertical-align: middle;
		text-align: center;
		margin-left: 15px;
	}

	.content {
		position: absolute;
		/*background-color: #ff0000;*/
		margin: 0 0 0 0;
		top: 84px;
		width: 100%;
	  max-height: 595px;
		overflow-x: hidden;
		overflow-y: auto;
		padding: 60px 32px 0px 32px;
	}

	.content > div.item {
		display: inline-block;
		width: 470px;
		height: 258px;
		opacity: 0.95;
		background: #ffffff;
		box-shadow: 0 1px 1px 0 rgba(212,212,212,0.50);
		border-radius: 12px;
		text-align: center;
		margin: 15px 15px 15px 0;
	}

	.content > div.item > div.item-top {
		display: -webkit-flex;
  	display: flex;
	}

	.content > div.item > div.item-top > .elem {
		flex: 1;
		-webkit-flex: 1;
	}
/**
 * content > top > avatar-group
 */
	.content > div.item > div.item-top > .avatar-group {
		width: 120px;
		flex: none;
		-webkit-flex: none;
		margin-top: 23px;
	}

	.avatar-group > p {
		font-size: 14px;
		color: #666666;
	}

	.avatar-group > img.avatar {
		width: 60px;
		height: 60px;
		border-radius: 100%;
		border: 4px solid #F4F4F4;
	}

	/**
	 * content > top > content-group
	 */

	.item > div.item-top > div.content-group {
		text-align: left;
		margin-top: 18px;
		margin-right: 25px;
	}

	.item > div.item-top > div.content-group > .title {
		font-size: 16px;
		color: #333333;
		margin-left: 0;
		padding-left: 0;
		text-align: left;
	}
	.item > div.item-top > div.content-group > .description {
		font-size: 14px;
		color: #666666;
		line-height: 25px;
		text-align: left;
	}
/**
 * middle line
 */
	.content > div.item > div.line {
		background-color: #EDEDED;
		margin: 6px 20px 10px 20px;
		height: 1px;
	}
	/**
	 * bottom
	 */
	 .content > div.item > div.item-bottom {
		 height: 68px;
	 }

	 .content > div.item > div.item-bottom > * {
		 display: block;
	 }

	.content > div.item > div.item-bottom > a > button {
		width: 136px;
		height: 36px;
	  border: none;
		border-radius: 100px;
		font-size: 18px;
		color: #FFFFFF;
		background-color: rgba(54,185,145,1);
	}

</style>
