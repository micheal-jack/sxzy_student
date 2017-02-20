<template>
    <div class="catalog">
        <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
        <div class="masker"></div>
        <div class="popup">
            <i class="icon-close"></i>
            <img src="static/img/assets/course/popup.png" alt="">
            <p class="info">还未完成作业</p>
            <a class="do-homework" href="javascript:;">开始做作业</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'course_detail_catelog',
    data() {
        console.log(this.$route.params.id)
        return {
            title: '课程详情页-目录',

            data: [{
                label: '一级 1',
                children: [{
                    label: '二级 1-1',
                    children: [{
                        label: '三级 1-1-1'
                    }]
                }]
            }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                        label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                        label: '三级 2-2-1'
                    }]
                }]
            }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                        label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                        label: '三级 3-2-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
        }
    }
}
</script>
<style scoped>
.catalog {
    width: 100%;
}

.el-tree {
    border: none;
}

.masker {
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background: #000;
    display: block;
    z-index: 1002;
    position: fixed;
    top: 0;
    left: 0;
    display: none;
}


.popup {
    width: 323px;
    height: 320px;
    background: #FFF;
    border-radius: 8px;
    padding-top: 28px;
    box-sizing: border-box;
    position: fixed;
    z-index: 1003;
    top: 50%;
    left: 50%;
    margin-top: -160px;
    margin-left: -162px;
    display: none;
}
.popup .icon-close {
    width: 32px;
    height: 51px;
    display: block;
    background: url(/static/img/assets/course/icon-close.png) no-repeat;
    position: absolute;
    top: -40px;
    right: 0;
}
.popup img {
    width: 90px;
    height: 90px;
    display: block;
    border-radius: 50%;
    margin: 0 auto;
}
.popup .info {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-top: 40px;
}
.popup .do-homework {
    width: 228px;
    height: 48px;
    background: #36b991;
    border-radius: 24px;
    display: block;
    margin: 45px auto 0;
    font-size: 24px;
    color: #fff;
    line-height: 48px;
    text-align: center;
    text-decoration: none;
}
</style>
