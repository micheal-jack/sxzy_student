<template>
    <div class="course-page">
        <cui-navbar v-on:back="back" :title="title">
            <a v-on:click="showCategoryList" class="menu-button" slot="right">
                <i class="el-icon-menu large"></i>
            </a>
        </cui-navbar>
        <div class="select">
            <i class="icon-top"></i>
            <a href="javascript:;">全部课程</a>
            <a href="javascript:;">语文</a>
            <a href="javascript:;">数学</a>
            <a href="javascript:;">英语</a>
        </div>
        <scroller style="top:90px;" :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
            <el-select v-model="value" placeholder="请选择" class="term-list">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-row class="content">
                <el-col :span="12" v-for="item in course_list">
                    <div class="item">
                        <div class="item-top">
                            <div class="elem avatar-group">
                                <img class="avatar" width="60" height="60" src="static/img/avatar-finn.png" alt="">
                                <p>张老师</p>
                            </div>
                            <div class="elem content-group">
                                <router-link :to="{name:'CourseDetail',params:{id:item.course_id}}" class="title">
                                    <p>{{item.course_title}}</p>
                                </router-link>
                                <p class="description">请同学们预约课前导学及相关学习资源中的文件，上课前提问。请同学们做好准备， 做好课前复习。请同学们预约课前导学及相关学习资源中的文件，上课前提问。
                                </p>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="item-bottom">
                            <a class="item-btn btn-tag"><i class="icon-note"></i></a>
                            <a class="item-btn btn-question"><i class="icon-question"></i></a>
                            <router-link class="item-btn btn-router" :to="{ name: 'CourseDetailCatelog', params:{id:item.course_id} }">
                                <button class="right" type="button" name="button">继续学习</button>
                            </router-link>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </scroller>
    </div>
</template>
<script>
import Scroller from "vue-scroller/src/components/Scroller.vue"
export default {
    name: 'my_course',
    components: {
        Scroller
    },
    mounted() {
        this.$http.get('http://localhost:8992/api/user').then(function (response) {
            //JSON 返回
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });

        for (var i = 1; i <= 6; i++) {
            this.course_list.push({
                course_id: i,
                course_title: '课程 ' + i
            })
        }
    },
    methods: {
        refresh() {
            console.log('refresh')
            setTimeout(() => {
                var start = 1
                var l = [];
                for (var i = start; i < 7; i++) {
                    l.push({
                            course_id: i,
                            course_title: '课程New ' + i
                        })
                        // this.course_list.splice(0, 0, {course_id:i,course_title:'课程New '+i});
                }
                this.course_list = l
                if (this.$refs.my_scroller)
                    this.$refs.my_scroller.finishPullToRefresh();
            }, 1000)
        },
        infinite() {
            console.log('加载更多')
            setTimeout(() => {
                var start = this.course_list.length + 1;
                console.log(start)
                if (start >= 20) {
                    this.$refs.my_scroller.finishInfinite(true);
                    return
                }
                for (var i = start; i < start + 7; i++) {
                    this.course_list.push({
                        course_id: i,
                        course_title: '课程 ' + i
                    });
                }
                setTimeout(() => {
                    this.$refs.my_scroller.finishInfinite();
                })
            }, 1000)
        },
        back: function(evt) {
            console.log("back btn click");
        },
        showCategoryList: function(evt) {
            console.log("show category list");
        }
    },
    data() {
        return {
            title: '我的课程',
            course_list: [],
            options: [{
                value: '选项1',
                label: '2017年上'
            }, {
                value: '选项2',
                label: '2016年下'
            }, {
                value: '选项3',
                label: '2016年上'
            }, {
                value: '选项4',
                label: '2015年下'
            }, {
                value: '选项5',
                label: '2015年上'
            }],
            value: ''
        }
    }
}
</script>
<style>
.term-list .el-input__inner {
    border: none;
    border-radius: 30px;
    padding: 20px 0px;
    text-indent: 45px;
}
</style>
<style scoped>
.select {
    width: 138px;
    height: 227px;
    position: fixed;
    top: 90px;
    right: 24px;
    background: #49484A;
    z-index: 1002;
}

.select a {
    display: block;
    width: 109px;
    height: 54px;
    margin: 0 auto;
    font-size: 18px;
    color: #fff;
    line-height: 54px;
    text-align: center;
    text-decoration: none;
}
.select .icon-top {
    width: 11px;
    height: 9px;
    background: url(/static/img/assets/course/icon-top.png);
    position: absolute;
    top: -9px;
    right: 20px;
}
.el-col {
    padding: 10px 10px;
}

.course-page {
    margin: 0 0;
    overflow: hidden;
    min-height: 100%;
}

.menu-button {
    display: block;
    cursor: pointer;
}

.el-select {
    float: right;
    margin-right: 30px;
}

.large {
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

.icon-note,
.icon-question {
    width: 36px;
    height: 36px;
    display: block;
    background: url(/static/img/assets/course/note.png);
    background-size: 100%;
}

.icon-question {
    background: url(/static/img/assets/course/question.png);
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
    padding: 0px 20px;
    overflow: hidden;
    clear: both;
}

.content div.item {
    display: inline-block;
    height: 258px;
    opacity: 0.95;
    background: #ffffff;
    box-shadow: 0 1px 1px 0 rgba(212, 212, 212, 0.50);
    border-radius: 12px;
    text-align: center;
}

.content div.item > div.item-top {
    display: -webkit-flex;
    display: flex;
}

.content div.item > div.item-top > .elem {
    flex: 1;
    -webkit-flex: 1;
}


/**
 * content > top > avatar-group
 */

.content div.item > div.item-top > .avatar-group {
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

.item div.item-top > div.content-group {
    text-align: left;
    margin-top: 18px;
    margin-right: 25px;
}

.item div.item-top > div.content-group > .title {
    font-size: 16px;
    color: #333333;
    margin-left: 0;
    padding-left: 0;
    text-align: left;
    text-decoration: none;
}

.item div.item-top > div.content-group > .description {
    font-size: 14px;
    color: #666666;
    line-height: 25px;
    text-align: left;
    height: 95px;
    overflow: hidden;
}


/**
 * middle line
 */

.content div.item > div.line {
    background-color: #EDEDED;
    margin: 6px 20px 10px 20px;
    height: 1px;
}


/**
     * bottom
     */

.content div.item > div.item-bottom {
    height: 68px;
}

.content div.item > div.item-bottom > * {
    display: block;
}

.content div.item > div.item-bottom > a > button {
    width: 136px;
    height: 36px;
    border: none;
    border-radius: 100px;
    font-size: 18px;
    color: #FFFFFF;
    background-color: rgba(54, 185, 145, 1);
}
</style>
