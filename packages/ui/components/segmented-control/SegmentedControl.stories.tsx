import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import SegmentedControl from "./SegmentedControl";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * presentational leaf — controlled component, so the story owns the selected
 * value via local state.
 */
const meta: Meta<typeof SegmentedControl> = {
  title: "Cal UI/SegmentedControl",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("week");
    return (
      <div style={{ width: 320 }}>
        <SegmentedControl data={["day", "week", "month"]} value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithLabels: Story = {
  render: () => {
    const [value, setValue] = useState("list");
    return (
      <div style={{ width: 320 }}>
        <SegmentedControl
          data={[
            { value: "list", label: "List" },
            { value: "board", label: "Board" },
            { value: "calendar", label: "Calendar" },
          ]}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <SegmentedControl data={["day", "week", "month"]} value="week" onChange={() => undefined} disabled />
    </div>
  ),
};
