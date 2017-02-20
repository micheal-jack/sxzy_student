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
  <div>
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
  background: #36B991;
  margin-top: 85px;
}

</style>
