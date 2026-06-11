import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "../button/Button";
import { ButtonGroup } from "./ButtonGroup";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * presentational leaf — composes real Button children, no provider needed.
 */
const meta = {
  title: "Cal UI/ButtonGroup",
  component: ButtonGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button color="secondary">Cancel</Button>
      <Button color="secondary">Save draft</Button>
      <Button>Publish</Button>
    </ButtonGroup>
  ),
};

export const Combined: Story = {
  render: () => (
    <ButtonGroup combined>
      <Button color="secondary">Day</Button>
      <Button color="secondary">Week</Button>
      <Button color="secondary">Month</Button>
    </ButtonGroup>
  ),
};
