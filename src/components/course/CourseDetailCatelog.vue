<template>
<div>{{title}}</div>
</template>

<script>
export default {
  name: 'course_detail_catelog',
  data () {
  	console.log(this.$route.params.id)
    return {
    	title:'课程详情页-目录'
    }
  }
}
</script>

<style scoped>

</style>