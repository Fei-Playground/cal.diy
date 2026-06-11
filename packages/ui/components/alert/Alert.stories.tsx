import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Alert } from "./Alert";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * presentational leaf — renders off props.
 *
 * Note: the severity glyph (circle-x, etc.) comes from the @calcom/ui SVG icon
 * sprite, which is served by the running web app and not loaded inside Storybook,
 * so the icon area can appear empty here; the alert box, title and message render
 * with their real design-system tokens regardless.
 */
const meta = {
  title: "Cal UI/Alert",
  component: Alert,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    severity: { control: "select", options: ["neutral", "info", "warning", "error"] },
    title: { control: "text" },
    message: { control: "text" },
  },
  args: {
    severity: "info",
    title: "Heads up",
    message: "This is an informational alert rendered with real design-system tokens.",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {};

export const Neutral: Story = {
  args: { severity: "neutral", title: "Note", message: "A neutral, low-emphasis alert." },
};

export const Warning: Story = {
  args: { severity: "warning", title: "Careful", message: "This action may have side effects." },
};

export const Error: Story = {
  args: { severity: "error", title: "Something went wrong", message: "Please try again." },
};

export const AllSeverities: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {(["neutral", "info", "warning", "error"] as const).map((severity) => (
        <Alert key={severity} severity={severity} title={severity} message={`A ${severity} alert.`} />
      ))}
    </div>
  ),
};
