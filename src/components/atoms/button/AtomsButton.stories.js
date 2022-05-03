import AtomsButton from "./AtomsButton.vue";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "AtomsButton",
  component: AtomsButton,
  argTypes: {
    mode: {
      options: ['primary', 'secondary', 'danger', 'transparent'],
      control: 'select'
    },
    loading: {
      options: [true, false],
      control: 'boolean'
    },
  },
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

const Template = (args) => ({
  components: { AtomsButton },
  setup() {
    return { args };
  },
  template: '<AtomsButton v-bind="args" class="w-32">Button</AtomsButton>',
});

export const Primary = Template.bind({});
Primary.args = {
  mode: "primary",
  loading: false,
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  mode: "secondary",
};

export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  mode: "danger",
};

export const Transparent = Template.bind({});
Transparent.args = {
  ...Primary.args,
  mode: "transparent",
};
