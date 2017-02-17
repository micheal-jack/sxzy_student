<template>
    <div class="tab-box">
        <!-- <p>{{title}}</p> -->
        <!-- <p>课程ID：{{course_id}}</p> -->
        <p class="subject">语文（上）</p>
        <p class="teacher">老师：米伟娜</p>
        <button class="btn-close"></button>
        <div class="link-box">
            <router-link :to="{ name: 'CourseDetailCatelog', params:{id:course_id} }">目录</router-link>
            <router-link :to="{ name: 'CourseDetailThread', params:{id:course_id} }">提问</router-link>
            <router-link :to="{ name: 'CourseDetailNote', params:{id:course_id} }">笔记</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'course_detail',
    mounted() {
        console.log(1111)
    },
    data() {
        var course_id = this.$route.params.id
        return {
            title: '课程详情页',
            course_id: course_id,
        }
    }
}
</script>
<style scoped>
.tab-box {
    width: 360px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background: #fff;
}

.tab-box p {
    margin: 0 0;
}

.tab-box .subject {
    font-size: 20px;
    color: #666;
    line-height: 28px;
    margin-top: 14px;
    text-indent: 24px;
}

.tab-box .teacher {
    font-size: 18px;
    color: #999;
    line-height: 28px;
    text-indent: 24px;
    margin-bottom: 13px;
}

.btn-close {
    width: 51px;
    height: 32px;
    background: url(/static/img/assets/course/btn-close.png);
    position: absolute;
    right: 0;
    top: 25px;
    border: none;
    outline: none;
}
.link-box {
  width: 100%;
  height: 51px;
  border-top: 1px solid #36b991;
  border-bottom: 1px solid #36b991;
}
.link-box a {
  display: block;
  float: left;
  width: 33.3%;
  height: 100%;
  line-height: 48px;
  text-align: center;
  font-size: 18px;
  color: #36b991;
  text-decoration: none;
}
.link-box .router-link-active{
  background: #36b991;
  color: #fff;
}
</style>
