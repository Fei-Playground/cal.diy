import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@calcom/ui/components/badge";

/**
 * Example story wiring a real `@calcom/ui` component into Storybook, to confirm
 * the design-system components render under Storybook 9 + Next.js 16 (vite).
 */
const meta = {
  title: "Cal UI/Badge",
  component: Badge,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "warning", "orange", "success", "green", "gray", "blue", "red", "error", "purple"],
    },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    children: { control: "text" },
  },
  args: { children: "Badge", variant: "default", size: "md" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Success: Story = {
  args: { variant: "success", children: "Success" },
};

export const WithDot: Story = {
  args: { variant: "green", withDot: true, children: "Live" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
      {(["default", "success", "green", "gray", "blue", "red", "error", "purple"] as const).map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
};
