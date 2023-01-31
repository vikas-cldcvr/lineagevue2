import Vue from "vue";
import App from "./App.vue";
import "@cldcvr/flow-core/dist/types/vue2";
import "@cldcvr/flow-lineage/dist/types/vue2";
import "@cldcvr/flow-form-builder/dist/types/vue2";

Vue.config.productionTip = false;

import("@cldcvr/flow-core").then(async () => {
  await import("@cldcvr/flow-system-icon");
  await import("@cldcvr/flow-lineage");
  await import("@cldcvr/flow-form-builder");
  new Vue({
    render: (h) => h(App),
  }).$mount("#app");
});
