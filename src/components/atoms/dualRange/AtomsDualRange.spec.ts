import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AtomsDualRange from "./AtomsDualRange.vue";

describe("AtomsDualRange", () => {
  it("range slider renders properly", () => {
    const wrapper = mount(AtomsDualRange, { props: { minValue: 0, maxValue: 100 } });
    expect(wrapper.findAll("input")).toHaveLength(2);
    expect(wrapper.findAll("input")[0].element.type).toBe("range");
    expect(wrapper.findAll("input")[1].element.type).toBe("range");
  })
  it("both range inputs emit input", () => {
    const wrapper = mount(AtomsDualRange, { props: { minValue: 0, maxValue: 100 } });
    wrapper.findAll("input")[0].trigger("input");
    wrapper.findAll("input")[1].trigger("input");
    expect(wrapper.emitted().input).toHaveLength(2);
  })
  it("disabled property works okay", () => {
    const wrapper = mount(AtomsDualRange, { props: { minValue: 0, maxValue: 100, disabled: true } });
    expect(wrapper.findAll("input")[0].element.disabled).toBeTruthy();
    expect(wrapper.findAll("input")[1].element.disabled).toBeTruthy();
  })
});
