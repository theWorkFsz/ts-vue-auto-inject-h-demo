<script lang="tsx">
import { Component, Vue } from "vue-property-decorator";
import { CreateElement } from "vue";
import JsxPropTest from "./components/jsxPropTest.vue";

@Component({
  //@ts-ignore
  components: {
    test: () =>
      import(/* webpackChunkName: "test" */ "./components/test.vue").then(
        d => d.default
      )
  }
})
export default class App extends Vue {
  render(h: CreateElement) {
    return <JsxPropTest title="123" />;
  }
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
