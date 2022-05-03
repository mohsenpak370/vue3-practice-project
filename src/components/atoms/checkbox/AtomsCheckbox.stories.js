import AtomsCheckbox from "./AtomsCheckbox.vue";

export default {
  title: "AtomsCheckbox",
  component: AtomsCheckbox,
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
Primary.args = {
  label: "Checkbox's Label",
  disabled: false,
  size: "normal",
};

export const Small = Template.bind({});
Secondary.args = {
  ...Primary.args,
  size: "sm",
};

export const Large = Template.bind({});
Danger.args = {
  ...Primary.args,
  size: "lg",
};

