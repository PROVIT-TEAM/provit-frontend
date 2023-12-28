import type { StoryObj } from "@storybook/react";
import Button from "./index";

const meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["small", "medium", "large"],
      description: "버튼",
      table: {
        type: {
          summary: "small, medium, large",
        },
        defaultValue: { summary: "medium" },
      },
    },
    kind: {
      options: ["primary", "success"],
      description: "버튼 종류",
      table: {
        type: {
          summary: "primary, success",
        },
        defaultValue: { summary: "primary" },
      },
    },
    children: {
      control: { type: "text" },
      description: "텍스트",
      table: {
        type: { summary: "string" },
      },
    },
  },
} as const;

export default meta;
type Story = StoryObj<typeof meta>;

// export const SmallPrimary: Story = {
//   args: { variant: "small", kind: "primary", children: "Primary Button" },
// };

// export const MediumPrimary: Story = {
//   args: { variant: "medium", kind: "primary", children: "Primary Button" },
// };

// export const LargePrimary: Story = {
//   args: { variant: "large", kind: "primary", children: "Primary Button" },
// };

// export const SmallSuccess: Story = {
//   args: { variant: "small", kind: "success", children: "Success Button" },
// };

// export const MediumSuccess: Story = {
//   args: { variant: "medium", kind: "success", children: "Success Button" },
// };

// export const LargeSuccess: Story = {
//   args: { variant: "large", kind: "success", children: "Success Button" },
// };
