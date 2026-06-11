import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Divider, VerticalDivider } from "./Divider";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * atomic leaf — no props, no providers.
 */
const meta = {
  title: "Cal UI/Divider",
  component: Divider,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <p className="text-default text-sm">Above</p>
      <Divider />
      <p className="text-default text-sm">Below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", height: 32 }}>
      <span className="text-default text-sm">Left</span>
      <VerticalDivider />
      <span className="text-default text-sm">Right</span>
    </div>
  ),
};
