<template>
  <div id="app">
    <router-view class="bodyWrapper"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'App',
  data: function () {
    return {}
  },
  mounted () {},
  methods: {
    // region inner
    // endregion inner
  }
}
</script>
<style scoped>
#app {
  height: 100%;
}
.bodyWrapper {
  min-height: calc(100% - 140px);
}
</style>
<style>
html,
body {
  height: 100%;
}
/* region reset */
* {
  font-family: Helvetica, Arial, '微软雅黑';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
}

body,
head {
  padding: 0px;
  margin: 0px;
}

h1,
h2 {
  font-weight: normal;
  margin: 0px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #4e56c5;
  text-decoration: underline;
  cursor: pointer;
}

a:hover {
  color: #ff6600;
  text-decoration: none;
}

/* endregion reset */

/* region common */
.floatL {
  float: left;
}

.floatR {
  float: right;
}

.clearB {
  clear: both;
}

.displayN {
  display: none;
}

.displayB {
  display: block;
}

/* endregion common */
</style>
