import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AtomsButton from "./AtomsButton.vue";

describe("AtomsButton", () => {
  it("button renders properly", () => {
    const wrapper = mount(AtomsButton, { slots: { default: "Button" } });
    expect(wrapper.html()).toContain("Button");
  });
  it("button emits click event", () => {
    const wrapper = mount(AtomsButton);
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toHaveProperty("click");
  });
  it("button disabled status", () => {
    const wrapper = mount(AtomsButton, { props: { disabled: true } });
    expect(wrapper.find("button").attributes("disabled")).toBeDefined();
  });
  it("button loading status", () => {
    const wrapper = mount(AtomsButton, { props: { loading: true } });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).not.toHaveProperty("click");
    expect(wrapper.text()).toBe("Loading...");

    const wrapperWithLoadingSlot = mount(AtomsButton, {
      props: { loading: true },
      slots: { loading: "Button is Loading" },
    });
    expect(wrapperWithLoadingSlot.html()).toContain("Button is Loading");
  });
});
