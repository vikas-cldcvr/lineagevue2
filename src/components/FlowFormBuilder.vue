<template>
  <f-div padding="large" height="100%" overflow="scroll">
    <f-form-builder
      ref="form"
      :field.prop="field"
      :values.prop="values"
      @submit="handleSubmit"
      @state-change="handleStateChange"
      @input="handleInput"
    >
      <f-button
        :disabled="state?.isValid ? false : true"
        label="Submit"
        type="submit"
      ></f-button>
    </f-form-builder>

    <f-div height="100%" overflow="scroll">
      <pre>{{ values }}</pre>
    </f-div>
    <f-div>
      <pre>{{ state }}</pre>
    </f-div>
  </f-div>
</template>
<script lang="ts">
import {
  FormBuilderField,
  FormBuilderState,
  FormBuilderValues,
} from "@cldcvr/flow-form-builder";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FlowFormBuilder",
  data(): {
    field: FormBuilderField;
    state: FormBuilderState | null;
    values: FormBuilderValues | undefined;
  } {
    return {
      field: {
        type: "object",
        direction: "vertical",
        fieldSeparator: true,
        fields: {
          selectBox: {
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
          textField: {
            type: "text",
            helperText: "This field is a required field",
            validationRules: [
              {
                name: "required",
              },
            ],
          },
          eventTestField: {
            type: "text",
            helperText: "This field is a required field",
            validationRules: [
              {
                name: "required",
              },
            ],
            showWhen: (values: FormBuilderValues) => {
              return (values as Record<string, string>)?.textField === "vikas";
            },
            onClick: (event: PointerEvent) => {
              console.log("onClick callback triggered", event);
            },
            onInput: (event: Event) => {
              console.log("onInput callback triggered", event);
            },
            onFocus: (event: FocusEvent) => {
              console.log("onFocus callback triggered", event);
            },
            onKeyPress: (event: KeyboardEvent) => {
              console.log("onKeyPress callback triggered", event);
            },
            onKeyDown: (event: KeyboardEvent) => {
              console.log("onKeyDown callback triggered", event);
            },
            onKeyUp: (event: KeyboardEvent) => {
              console.log("onKeyUp callback triggered", event);
            },
            onMouseOver: (event: MouseEvent) => {
              console.log("onMouseOver callback triggered", event);
            },
          },
          switchButton: {
            type: "switchButton",
            validationRules: [
              {
                name: "required",
              },
            ],
          },
          radio: {
            type: "radio",
            label: {
              title: "Radios",
            },
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

          checkboxField: {
            type: "checkbox",
            direction: "horizontal",
            label: {
              title: "Check/Uncheck options",
              description: "this my checkbox",
            },
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
          textAreaField: {
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
          nestedObject: {
            type: "object",
            fields: {
              username: {
                type: "text",
                validationRules: [{ name: "required" }],
              },
              email: {
                type: "text",
                validationRules: [{ name: "required" }, { name: "email" }],
              },
            },
          },
          nestedArray: {
            type: "array",
            label: {
              title: "Nested array",
            },
            field: {
              type: "text",
              validationRules: [
                {
                  name: "required",
                },
              ],
            },
          },
          getButton: {
            type: "button",
            label: "get",
            iconLeft: "i-arrow-rotate",
          },
        },
      },
      values: { textField: "vikas" },
      state: null,
    };
  },
  methods: {
    handleSubmit(event: CustomEvent) {
      console.log("Submit", event);
    },
    handleStateChange(event: CustomEvent) {
      this.state = event.detail as FormBuilderState;
      console.log(this.state);
    },
    handleInput(event: CustomEvent) {
      // console.log(event.detail);
      this.values = event.detail as FormBuilderValues;
    },
  },
});
</script>
<style>
f-form-builder {
  overflow: auto;
}
</style>
