<template>
    <div class="catalog">
    </div>
</template>
<script>
export default {
    name: 'course_detail_catelog',
    data() {
        console.log(this.$route.params.id)
        return {
            title: '课程详情页-目录'
        }
    }
}
</script>
<style scoped>
.catalog {
    width: 35%;
    height: auto;
    position: fixed;
    top: 0;
    right: 0;
}
</style>
