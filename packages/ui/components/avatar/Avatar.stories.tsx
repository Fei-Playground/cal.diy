import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Avatar } from "./Avatar";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * presentational leaf — renders off props. With no imageSrc the radix Avatar
 * shows the `fallback` node, so it renders reliably without a network image.
 */
const meta = {
  title: "Cal UI/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "xsm", "sm", "md", "mdLg", "lg", "xl"] },
    shape: { control: "inline-radio", options: ["circle", "square"] },
  },
  args: {
    alt: "Jane Doe",
    size: "md",
    shape: "circle",
    fallback: <span className="text-emphasis text-sm font-medium">JD</span>,
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Square: Story = {
  args: { shape: "square" },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["xs", "sm", "md", "mdLg", "lg", "xl"] as const).map((size) => (
        <Avatar
          key={size}
          alt={size}
          size={size}
          fallback={<span className="text-emphasis text-xs font-medium">JD</span>}
        />
      ))}
    </div>
  ),
};
