import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * presentational leaf — renders off props with no tRPC / server / useLocale import.
 */
const meta = {
  title: "Cal UI/Button",
  component: Button,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "select", options: ["primary", "secondary", "minimal", "destructive"] },
    size: { control: "inline-radio", options: ["xs", "sm", "base", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
  },
  args: { children: "Button", color: "primary", size: "base" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: { color: "secondary", children: "Secondary" },
};

export const Minimal: Story = {
  args: { color: "minimal", children: "Minimal" },
};

export const Destructive: Story = {
  args: { color: "destructive", children: "Delete" },
};

export const Loading: Story = {
  args: { loading: true, children: "Saving" },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Disabled" },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
      {(["primary", "secondary", "minimal", "destructive"] as const).map((color) => (
        <Button key={color} color={color}>
          {color}
        </Button>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
      {(["xs", "sm", "base", "lg"] as const).map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};
