import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Breadcrumb, BreadcrumbItem } from "./Breadcrumb";

/**
 * Story colocated next to the component (Fei PREVIEWER convention). Tier-1
 * presentational leaf. Uses `Breadcrumb` + `BreadcrumbItem` (next/link is
 * provided by the Storybook nextjs-vite framework); the `BreadcrumbContainer`
 * export reads the live pathname and is intentionally not story-ized here.
 */
const meta = {
  title: "Cal UI/Breadcrumb",
  component: Breadcrumb,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/settings">Settings</BreadcrumbItem>
      <BreadcrumbItem href="/settings/profile">Profile</BreadcrumbItem>
    </Breadcrumb>
  ),
};
