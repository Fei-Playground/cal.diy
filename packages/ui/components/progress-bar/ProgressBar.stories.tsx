import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProgressBar } from "./ProgressBar";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * atomic leaf — fully self-contained, renders off props.
 */
const meta = {
  title: "Cal UI/ProgressBar",
  component: ProgressBar,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["green", "blue", "red", "yellow", "gray"] },
    percentageValue: { control: { type: "range", min: 0, max: 100, step: 1 } },
    label: { control: "text" },
  },
  args: { color: "blue", percentageValue: 60, label: "60%" },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Complete: Story = {
  args: { color: "green", percentageValue: 100, label: "Done" },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 360 }}>
      {(["green", "blue", "red", "yellow", "gray"] as const).map((color, i) => (
        <ProgressBar key={color} color={color} percentageValue={(i + 1) * 18} label={color} />
      ))}
    </div>
  ),
};
