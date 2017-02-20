<template>
    <div class="content-page">
        <cui-navbar v-on:back="back" :title="title">
            <a v-on:click="showCategoryList" class="menu-button" slot="right">
                <i class="el-icon-menu large"></i>
            </a>
        </cui-navbar>
        <div class="bottom">
            <a class="last-one" href="javascript:;"><i class="icon-last"></i>上一个</a>
            <a class="next-one" href="javascript:;">下一个<i class="icon-next"></i></a>
            <a class="learned" href="javascript:;">学过了</a>
        </div>
        <div class="tab-box" v-show="a">
            <p class="subject">语文（上）</p>
            <p class="teacher">老师：米伟娜</p>
            <button class="btn-close" v-on:click="a=false"></button>
            <div class="link-box">
                <router-link :to="{ name: 'CourseDetailCatelog', params:{id:course_id} }">目录</router-link>
                <router-link :to="{ name: 'CourseDetailThread', params:{id:course_id} }">提问</router-link>
                <router-link :to="{ name: 'CourseDetailNote', params:{id:course_id} }">笔记</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'course_detail',
    mounted() {
        console.log(1111);
    },
    data() {
        var course_id = this.$route.params.id
        return {
            title: '课时1：大海的故乡',
            course_id: course_id,
            a: false,
        }
    },
    methods: {
        back: function(evt) {
            console.log("back btn click");
        },
        showCategoryList: function(evt) {
            console.log("show category list");
            this.a=true;
        }
    }
}
</script>
<style>
.content-page nav .title {
    color: #fff;
}

.content-page nav .back-button i,
.content-page nav .menu-button i {
    color: #fff;
}
</style>
<style scoped>
.content-page nav {
    background: #333;
}

.tab-box {
    width: 360px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    background: #fff;
    z-index: 1001;
    /*display: none;*/
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

.link-box .router-link-active {
    background: #36b991;
    color: #fff;
}

.bottom {
    width: 100%;
    height: 60px;
    background: #333;
    position: fixed;
    bottom: 0;
    left: 0;
}

.bottom .last-one,
.bottom .next-one {
    display: block;
    float: left;
    height: 100%;
    line-height: 60px;
    width: 90px;
    font-size: 20px;
    color: #D3D3D3;
    text-decoration: none;
}

.bottom .last-one {
    margin-left: 40px;
}

.bottom .next-one {
    margin-left: 20px;
}

.bottom .icon-last,
.bottom .icon-next {
    width: 24px;
    height: 24px;
    display: block;
    float: left;
    background-size: 100% 100%;
    margin-top: 20px;
}

.bottom .icon-last {
    background: url(/static/img/assets/course/lastone.png) no-repeat;
}

.bottom .icon-next {
    float: right;
    background: url(/static/img/assets/course/nextone.png) no-repeat;
}

.bottom .learned {
    width: 90px;
    height: 36px;
    border-radius: 4px;
    background: #666;
    font-size: 20px;
    color: #D3D3D3;
    text-decoration: none;
    display: block;
    float: right;
    text-align: center;
    line-height: 36px;
    margin-right: 25px;
    margin-top: 12px;
}
</style>
