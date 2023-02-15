<template>
  <f-div id="app" height="100%" width="100%" state="default">
    <FlowLineage v-if="view === 'lineage'" />
    <FlowFormBuilder v-if="view === 'formbuilder'" />
  </f-div>
</template>

<script lang="ts">
import Vue from "vue";
import FlowLineage from "./components/FlowLineage.vue";
import FlowFormBuilder from "./components/FlowFormBuilder.vue";
export default Vue.extend({
  name: "App",
  components: {
    FlowLineage,
    FlowFormBuilder,
  },
  data() {
    return {
      view: "formbuilder",
    };
  },
});
</script>

<style lang="scss">
@import "@cldcvr/flow-core/dist/style.css";
@import "@cldcvr/flow-lineage/dist/style.css";
@import "@cldcvr/flow-form-builder/dist/style.css";
</style>
