import AtomsRadio from "./AtomsRadio.vue";
import { ref } from 'vue'
export default {
  title: "AtomsRadio",
  component: AtomsRadio,
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
      options: ['radioValue', 'anotherValue'],
      control: "select",
    }
  }
};

const Template = (args) => ({
  components: { AtomsRadio },
  setup() {
    const radio = ref('radioValue')
    return { radio, args };
  },
  template: '<AtomsRadio v-model="radio" v-bind="args"/>',
});

export const Normal = Template.bind({});
Normal.args = {
  label: "Label's text",
  value: "radioValue",
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

