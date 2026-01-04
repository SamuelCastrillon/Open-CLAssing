import type { Meta, StoryObj } from "@storybook/preact-vite";
import HomeView from "./HomeView";

const meta: Meta<typeof HomeView> = {
  title: "Modules/Home/HomeView",
  component: HomeView,
};

export default meta;
type Story = StoryObj<typeof HomeView>;

export const Default: Story = {};
