import AtomsCheckbox from "./AtomsCheckbox.vue";
import { ref } from 'vue'
export default {
  title: "AtomsCheckbox",
  component: AtomsCheckbox,
  argTypes: {
    size: {
      options: ["sm", "normal", "lg"],
      control: "select",
    },
    fontWeight: {
      options: ["normal", "bold"],
      control: "select",
    },
    value: {
      options: [true, false],
      control: "boolean",
    }
  }
};

const Template = (args) => ({
  components: { AtomsCheckbox },
  setup() {
    const check = ref(true)
    return { check, args };
  },
  template: '<AtomsCheckbox v-model="check" v-bind="args"/>',
});

export const Normal = Template.bind({});
Normal.args = {
  label: "Label's text",
  disabled: false,
  size: "normal",
};

export const Small = Template.bind({});
Small.args = {
  ...Normal.args,
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  ...Normal.args,
  size: "lg",
};

