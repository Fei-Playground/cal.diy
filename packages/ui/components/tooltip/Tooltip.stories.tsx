import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "../button/Button";
import { Tooltip } from "./Tooltip";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * presentational leaf — wraps radix Tooltip. A radix `Provider` is required in
 * the tree, and `defaultOpen` is set so the tooltip is visible on first render
 * (it would otherwise only appear on hover).
 */
const meta: Meta<typeof Tooltip> = {
  title: "Cal UI/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div style={{ padding: 48 }}>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip content="Helpful hint" defaultOpen>
      <Button color="secondary">Hover me</Button>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 48 }}>
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side} content={side} side={side} defaultOpen>
          <Button color="secondary">{side}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
