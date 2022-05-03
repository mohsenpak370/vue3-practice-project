import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AtomsCheckbox from "./AtomsCheckbox.vue";

describe("AtomsCheckbox", () => {
  it("checkbox renders properly", async () => {
    const wrapper = mount(AtomsCheckbox);
    expect(wrapper.html()).toContain("input");
    expect(wrapper.html()).toContain('type="checkbox"');
  })
  it("checkbox would print it's label", async () => {
    const wrapper = mount(AtomsCheckbox, { props: { modelValue: false, label: "label text"} });
    expect(wrapper.html()).toContain("label text");
  })
  it("checkbox emits input event", async () => {
    const wrapper = mount(AtomsCheckbox);
    await wrapper.find("input").trigger("input");
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted().input).toHaveLength(1);
  })
});