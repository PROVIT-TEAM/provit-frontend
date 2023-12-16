import type { StoryObj } from "@storybook/react";
import Label from "./index";

const meta = {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
    variant: {
      options: ["medium"],
      description: "텍스트",
      table: {
        type: {
          summary: "medium",
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

export const Medium: Story = {
  args: { variant: "medium", children: text },
};
