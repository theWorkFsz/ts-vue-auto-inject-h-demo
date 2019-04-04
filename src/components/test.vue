<template>
  <div></div>
</template>

<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  test = (h: any) => <div>123</div>;
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
