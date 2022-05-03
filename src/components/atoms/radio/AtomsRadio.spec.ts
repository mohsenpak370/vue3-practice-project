import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AtomsRadio from "./AtomsRadio.vue";

describe("AtomsRadio", () => {
  it("radio input renders properly", async () => {
    const wrapper = mount(AtomsRadio);
    expect(wrapper.html()).toContain("input");
    expect(wrapper.html()).toContain('type="radio"');
  })
  it("radio input would print it's label", async () => {
    const wrapper = mount(AtomsRadio as any, { props: { label: "label text" } });
    expect(wrapper.html()).toContain("label text");
  })
  it("radio input emits input event", async () => {
    const wrapper = mount(AtomsRadio);
    await wrapper.find("input").trigger("input");
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted().input).toHaveLength(1);
  })
});