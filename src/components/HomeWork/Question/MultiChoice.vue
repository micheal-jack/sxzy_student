<template>
<div>
  <el-row>
    <el-col :span="20" :offset="2">
      <div class="grid-content">
        <img src="static/img/assets/homework/err.png" />  回答错误
      </div>
    </el-col>
    <el-col :span="2">
      <div class="grid-content">
       <el-button class="btn-analytics">析</el-button>
     </div>
    </el-col>
  </el-row>
  <el-checkbox-group v-model="checkedOptions" @change="handleCheckedOptionChange">
    <el-row :gutter="20">
      <el-col v-for="option in meta.options">
        <div class="grid-content">
          <el-checkbox  :label="option.content">{{option.content}}</el-checkbox>
        </div>
      </el-col>
    </el-row>
 </el-checkbox-group>
</div>
</template>

<script>
export default {
  data () {
    return {
    	title:'多选题',
      checkedOptions: [],
      meta: {
        options: [
          {content:'A.正四面体结构'},
           {content:'B.分子呈非直线型'},
           {content:'C.高度缔合性'},
           {content:'D.不对称的电荷分布'}
        ]
      }
    }
  },
  methods: {
    handleCheckedOptionChange: function () {
      console.log("option change....");
    }
  }
}
</script>

<style scoped>

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.grid-content {
  border-radius: 4px;
  min-height: 45px;
  text-align: center;
}

.btn-analytics {
  width: 42px;
  height: 42px;
  background: #F5F5F5;
  border: 1px solid #C4C4C4;
  border-radius: 100%;
  font-size: 20px;
  color: #AEAEAE;
  padding: 0 0;
}

.el-checkbox {
  min-width: 330px;
  min-height: 64px;
  background: #FFFFFF;
  border: 1px solid #BCBCBC;
  border-radius: 8px;

  font-size: 18px;
  color: #333333;
  letter-spacing: 0;

  margin: 10px auto;
}

.el-checkbox__label {
    font-size: 18px;
    color: #333333;
    letter-spacing: 0;
}

</style>
