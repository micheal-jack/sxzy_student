<template>
<div class="work-start-page">
  <cui-navbar v-on:back="back" :title="title">
    <div slot="right">
      <a class="menu-button">
        <img src="static/img/assets/homework/abcd.png" />
      </a>
      <a class="menu-button">
        <img src="static/img/assets/homework/group.png" />
      </a>
      <a class="menu-button">
        <img src="static/img/assets/homework/chart.png" />
      </a>
    </div>
  </cui-navbar>

  <div class="work_content">
    <div class="content-bg"></div>
    <el-row :gutter="20" class="card-row">
    </el-row>
    <el-row :gutter="20">
      <el-col>
        <div class="grid-content card-wrapper">
            <div class="card-item">
              <p class="card-count">30</p>
              <p class="card-label">答题</p>
            </div>
            <div class="card-item">
              <p class="card-count">30</p>
              <p class="card-label">答对</p>
            </div>
            <div class="card-item">
              <p class="card-count">30</p>
              <p class="card-label">答错</p>
            </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col><p class="exam-title">古诗词欣赏课上练习</p></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <div><p class="exam-desc">作业说明：本作业需要同学们在周五之前完成。本作业需要同学们在周五之前完成。们在周五之前完成。本作业需要同学们在周五</p></div>
      </el-col>
    </el-row>

    <div class="bottom-container">
      <p class="bottom-content">本作业共 <span class="test-count">10</span> 道题目，已经完成 <span class="test-count">8</span> 道，还有 <span class="test-count">2</span> 道题未作答。</p>
      <p class="bottom-content"> 点击答题卡<img src="static/img/assets/homework/abcd.png" />，查看题目完成情况。</p>
    </div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    	title:'答题'
    }
  },
  methods: {
    back: function () {

    }
  }
}
</script>

<style scoped>
.menu-button {
  margin-left: 1.2rem;
  margin-right: 1.2rem;
}

.work-start-page {
  width: 100%;
  height: inherit;
}

.work_content {
  width: 100%;
  height: inherit;
  margin-top: 85px;
  background-color: #ffffff;
}

.work_content > .content-bg {
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 50%;
  background-image: url('/static/img/assets/homework/repeat-x.png');
  background-repeat: repeat-x;
  background-size: contain;
}

.work_content > .card-row {
  min-height: 2.5rem;
  max-height: 2.5rem;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

p.exam-title {
  font-size: 36px;
  color: #FFFFFF;
  line-height: 32px;
  text-align: center;
}

p.exam-desc {
  font-size: 20px;
  color: #FFFFFF;
}

.grid-content > .card-item {
  /*display: inline-block;*/
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
}

.card-wrapper {
  display: flex;
  display: -webkit-flex;
  float: right;
  margin-right: 30px;
}

.grid-content > .card-item > * {
  line-height: normal;
  vertical-align: top;
}

.grid-content > .card-item > div {
  margin: 0 0;
}

.card-item > .card-count {
  margin:  0 0;
  line-height: 30px;
  background: #FFFFFF;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  font-size: 18px;
  color: #36B991;
}

.card-item > .card-label {
  margin: 6px 0;
  font-size: 16px;
  color: #FFFFFF;
  line-height: 20px;
}

.bottom-container {
  /*background-color: #333;*/
  position: absolute;
  top: 50%;
  width: 100%;
  height: 50%;
  margin-top: 110px;
}

.bottom-content {
  text-align: center;
  font-size: 20px;
  color: #666666;
  letter-spacing: 0;
  line-height: 42px;
}


.test-count {
  font-size: 20px;
  color: #36B991;
  letter-spacing: 0;
  line-height: 42px;
}


</style>
