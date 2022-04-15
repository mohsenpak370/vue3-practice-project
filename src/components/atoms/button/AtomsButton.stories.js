import AtomsButton from './AtomsButton.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'AtomsButton',
  component: AtomsButton,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const Primary = () => ({
  components: { AtomsButton },
  template: '<AtomsButton>Button Text</AtomsButton>',
});

export const Secondary = () => ({
  components: { AtomsButton },
  template: '<AtomsButton mode="secondary" />',
});

export const Danger = () => ({
  components: { AtomsButton },
  template: '<AtomsButton mode="danger" />',
});

export const Transparent = () => ({
  components: { AtomsButton },
  template: '<AtomsButton mode="transparent" />',
});