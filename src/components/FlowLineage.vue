<template>
  <f-lineage
    direction="horizontal"
    :padding="28"
    :gap="100"
    :node-size.prop="{ width: 240, height: 53 }"
    :children-node-size.prop="{ width: 240, height: 32 }"
    :max-children="8"
    :links.prop="links"
    :nodes.prop="nodes"
    :node-template="nodeTemplate"
    :children-node-template="childNodeTemplate"
  ></f-lineage>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlowLineage",
  data() {
    return {
      updateCounter: 0,
      nodes: {
        rdj: {
          templateData: {
            fullName: "Robert Downey Jr.",
            description: "Movies",
            state: "secondary",
          },
          children: {
            rdj_child: {
              templateData: {
                icon: "i-hashtag",
                title: "Iron man 1",
              },
            },
          },
          hideChildren: false,
        },
        judge: {
          templateData: {
            fullName: "The Judge",
            description: "Hank Palmer",
            state: "custom,#006ecc",
          },
        },
        ironman: {
          templateData: {
            fullName: "Iron Man",
            description: "Tony stark",
            state: "secondary",
          },
          children: {
            irchild1: {
              templateData: {
                icon: "i-hashtag",
                title: "Iron man 1",
              },
            },
            irchild2: {
              templateData: {
                icon: "i-paragraph",
                title: "Iron man 2",
              },
            },
          },
          hideChildren: false,
        },
        hank: {
          templateData: {
            fullName: "Hank Palmer",
            description: "Actor",
            state: "secondary",
          },
          children: {
            child1: {
              templateData: {
                icon: "i-hashtag",
                title: "Node child 1",
              },
            },
            child2: {
              templateData: {
                icon: "i-paragraph",
                title: "Node child 2",
              },
            },
          },
          hideChildren: false,
        },
      },
      links: [
        {
          from: "rdj",
          to: "judge",
        },
        {
          from: "rdj",
          to: "ironman",
        },
        {
          from: "judge",
          to: "hank",
        },
        {
          from: "iman1",
          to: "child1",
        },
      ],
      nodeTemplate: `<f-div
			state=\${node.templateData.state}
			width="100%"
			height="100%"
			padding="small"
			align="top-left"
			variant="curved"
			gap="small"
			\${node.children && !node.hideChildren ? 'border="small solid default bottom"' : ""}
		  >
			  <f-pictogram variant="circle" source="\${node.templateData.fullName}"></f-pictogram>
			  <f-div direction="column">
				  <f-text size="small" ellipsis>\${node.templateData.fullName}</f-text>
				  <f-text size="x-small" ellipsis>\${node.templateData.description}</f-text>
			  </f-div>
			  \${node.childrenToggle}
		  </f-div>`,
      childNodeTemplate: `<f-div
			  state="secondary"
			  width="100%"
			  height="100%"
			  padding="none medium"
			  align="middle-left"
			  gap="small"
			  border="small solid default bottom"
			>
			  <f-icon source="\${node.templateData.icon}" size="small"></f-icon>
			  <f-text  size="small" ellipsis>\${node.templateData.title}</f-text>
			</f-div>`,
    };
  },
  mounted() {
    console.log(
      "Hot updating template Data...",
      this.updateCounter,
      this.nodes.rdj.templateData
    );
    setInterval(() => {
      this.updateCounter += 1;
      //   this.nodes = { ...this.nodes };
      if (this.nodes.rdj?.templateData) {
        this.nodes.rdj.templateData.fullName = `Vikas ${this.updateCounter}`;
      }

      if (this.nodes.rdj.children) {
        this.nodes.rdj.children.rdj_child.templateData.title = `Hello ${this.updateCounter}`;
      }
    }, 5000);
  },
});
</script>
