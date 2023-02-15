<template>
  <f-div padding="large">
    <f-div>
      <f-form-builder
        :config.prop="config"
        :values.prop="values"
        @submit="handleSubmit"
        @stateChange="handleStateChange"
        @input="handleInput"
      >
        <f-button
          :disabled="state?.isValid ? false : true"
          label="Submit"
          type="submit"
        ></f-button>
      </f-form-builder>
    </f-div>
    <f-div>
      <pre>{{ values }}</pre>
    </f-div>
    <f-div>
      <pre>{{ state?.isValid }}</pre>
    </f-div>
  </f-div>
</template>
<script lang="ts">
import {
  FormBuilderValues,
  FormBuilderConfig,
  FormBuilderState,
} from "@cldcvr/flow-form-builder";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlowFormBuilder",
  data(): {
    config: FormBuilderConfig;
    state: FormBuilderState | null;
    values: FormBuilderValues;
  } {
    return {
      config: {
        gap: "large",
        groupSeparator: true,
        fieldSize: "small",
        variant: "round",
        category: "fill",
        label: {
          title: "Form",
          description: "This is a form description",
          iconTooltip: "Hello",
        },
        groups: {
          ["Group 7 New"]: {
            type: "object",
            direction: "horizontal",
            isCollapsible: false,
            isCollapsed: true,
            fields: {
              select: {
                selection: "multiple",
                options: ["option 1", "option 2", "option 3"],
                type: "select",
                placeholder: "This is a placeholder",
                iconLeft: "i-app",
                disabled: false,
                clear: true,
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
              xyz: {
                type: "text",
                helperText: "This field is a required field",
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
            },
          },
          group1: {
            type: "array",
            direction: "horizontal",
            isCollapsible: false,
            isCollapsed: true,
            canDuplicate: true,
            label: {
              title: "Group 1",
              description: "This is Group 1",
              iconTooltip: "Hello",
            },
            fields: {
              abc: {
                type: "text",
                placeholder: "This is a placeholder",
                autoComplete: false, // to disabled browser's auto-complete behavior
                iconLeft: "i-app",
                prefix: "+91",
                maxLength: 100,
                loading: false,
                disabled: false,
                readonly: false,
                clear: true,
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
              xyz: {
                type: "text",
                helperText: "This field is a required field",
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
            },
          },
          group2: {
            type: "object",
            showWhen: (formValues: FormBuilderValues) => {
              return (
                (formValues?.group1 as Record<string, unknown>).xyz === "show"
              );
            },
            fields: {
              username: {
                type: "text",
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
              email: {
                type: "email",
                validationRules: [
                  {
                    name: "required",
                  },
                ],
                showWhen: (formValues: FormBuilderValues) => {
                  return (
                    (formValues?.group2 as Record<string, unknown>).username ===
                    "abc"
                  );
                },
              },
              lastname: {
                type: "text",
                validationRules: [
                  {
                    name: "required",
                    when: ["click"],
                    message: "The {{name}} is mandatory",
                  },
                  {
                    name: "custom",
                    message: "{{value}} is not available",
                    validate: (value: unknown) => {
                      return value !== "vikas";
                    },
                  },
                ],
              },
            },
          },
          group3: {
            type: "object",
            direction: "vertical",
            gap: "medium",
            label: {
              title: "Group 3",
              description: "This is Group 3",
              iconTooltip: "Hello",
            },
            fields: {
              checkbox: {
                type: "checkbox",
                // helperText: "This field is required",
                options: [
                  { id: "1", title: "Orange", iconTooltip: "hello" },
                  {
                    id: "2",
                    title: "Banana",
                    iconTooltip: "hello",
                  },
                ],
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
            },
          },
          group4: {
            type: "object",
            direction: "vertical",
            label: {
              title: "Textarea",
              description: "This is A textarea",
              iconTooltip: "Hello",
            },
            fields: {
              texthere: {
                type: "textarea",
                placeholder: "This is a placeholder",
                maxLength: 100,
                disabled: false,
                readonly: false,
                clear: true,
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
            },
          },
          group5: {
            type: "object",
            direction: "vertical",
            gap: "medium",
            label: {
              title: "Group 5",
              description: "This is Group 5",
              iconTooltip: "Hello",
            },
            fields: {
              radio: {
                type: "radio",
                // helperText: "This field is required",
                options: [
                  { id: "1", title: "Orange", iconTooltip: "hello" },
                  {
                    id: "2",
                    title: "Banana",
                    iconTooltip: "hello",
                  },
                ],
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
            },
          },
          group6: {
            type: "object",
            direction: "vertical",
            gap: "medium",
            label: {
              title: "Group 6",
              description: "This is Group 6",
              iconTooltip: "Hello",
            },
            fields: {
              switchButton: {
                type: "switchButton",
                validationRules: [
                  {
                    name: "required",
                  },
                ],
              },
            },
          },
        },
      },
      values: {
        group1: [
          { abc: "abc", xyz: "234" },
          { abc: "2nd value", xyz: " 2nd xyz" },
        ],
      },
      state: null,
    };
  },
  methods: {
    handleSubmit(event: CustomEvent) {
      console.log("Submit", event);
    },
    handleStateChange(event: CustomEvent) {
      this.state = event.detail as FormBuilderState;
      console.log(this.state.isValid);
    },
    handleInput(event: CustomEvent) {
      // this.values = event.detail as FormBuilderValues;
    },
  },
});
</script>
