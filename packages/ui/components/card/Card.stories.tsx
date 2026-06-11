import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "./Card";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * presentational leaf — renders off props. The `basic` variant needs no image
 * or media network calls.
 */
const meta = {
  title: "Cal UI/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
  },
  args: {
    variant: "basic",
    title: "Connect your calendar",
    description: "Sync events so Cal.diy can avoid double-bookings.",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <Card {...args} />
    </div>
  ),
};

export const WithAction: Story = {
  render: (args) => (
    <div style={{ width: 320 }}>
      <Card
        {...args}
        actionButton={{ child: "Connect", onClick: () => undefined }}
      />
    </div>
  ),
};
