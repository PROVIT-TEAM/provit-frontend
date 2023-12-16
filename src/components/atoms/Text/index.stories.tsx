import type { StoryObj } from "@storybook/react";
import Text from "./index";

const meta = {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    variant: {
      options: ["extraSmall", "small", "medium", "large"],
      description: "텍스트",
      table: {
        type: {
          summary: "extraSmall, small, medium, large",
        },
        defaultValue: { summary: "medium" },
      },
    },
    children: {
      control: { type: "text" },
      description: "텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    color: {
      control: { type: "color" },
      description: "텍스트 색상",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

const text = `sample text.`;

export const ExtraSmall: Story = {
  args: { variant: "extraSmall", color: "#000000", children: text },
};

export const Small: Story = {
  args: { variant: "small", color: "#000000", children: text },
};

export const Medium: Story = {
  args: { variant: "medium", color: "#000000", children: text },
};

export const Large: Story = {
  args: { variant: "large", color: "#000000", children: text },
};
