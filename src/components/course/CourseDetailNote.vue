<template>
<div class="notes">
	<textarea></textarea>
	<button class="save-note">保存笔记</button>

</div>
</template>

<script>
export default {
  name: 'course_detail_note',
  data () {
    return {
    	title:'课程详情页-笔记'
    }
  }
}
</script>

<style scoped>
.notes {
	width: 100%;
	padding: 10px;
}
.notes textarea {
	width: 340px;
	height: 300px;
	resize: none;
	border: 1px solid #e7e7e7;
	outline: none;
	padding: 10px;
	box-sizing: border-box;
}
.save-note {
	width: 340px;
	height: 46px;
	background: #36b991;
	border-radius: 4px;
	border: none;
	outline: none;
	font-size: 18px;
	color: #fff;
	position: absolute;
	bottom: 10px;
	cursor: pointer;
	left:10px;
}
</style>