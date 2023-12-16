import type { StoryObj } from "@storybook/react";
import Input from "./index";

const meta = {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    variant: {
      options: ["small", "medium", "large"],
      description: "텍스트",
      table: {
        type: {
          summary: "small, medium, large",
        },
        defaultValue: { summary: "medium" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "플레이스홀더",
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

export const Small: Story = {
  args: {
    variant: "small",
    placeholder: "월",
  },
};

export const Medium: Story = {
  args: { variant: "medium", placeholder: text },
};

export const Large: Story = {
  args: { variant: "large", placeholder: text },
};
