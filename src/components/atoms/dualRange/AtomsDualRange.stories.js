import AtomsDualRange from "./AtomsDualRange.vue";
import "./AtomsDualRange.css";
import { ref } from "vue";
export default {
  title: "AtomsDualRange",
  component: AtomsDualRange,
  argTypes: {
    minValue: {
      value: 10,
      control: { type: "range", min: 0, max: 100 },
    },
    maxValue: {
      value: 90,
      control: { type: "range", min: 0, max: 100 },
    },
  },
};

const Template = (args) => ({
  components: { AtomsDualRange },
  setup() {
    const min = ref(10);
    const max = ref(90);
    const step = ref(1);
    return { min, max, step, args };
  },
  template:
    '<AtomsDualRange v-model:minValue="min" v-model:maxValue="max" v-bind="args" class="mt-12 max-w-sm"/>',
});

export const Default = Template.bind({});
Default.args = {
  disabled: false,
};
