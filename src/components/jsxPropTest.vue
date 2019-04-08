<script lang="tsx">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CreateElement } from "vue";

@Component({})
export default class JsxPropTest extends Vue {
  @Prop({ type: String }) title!: string;
  render(h: CreateElement) {
    return <div>123</div>;
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
