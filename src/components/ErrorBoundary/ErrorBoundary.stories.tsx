import { Meta, StoryObj } from "@storybook/react";

import ErrorBoundary from "./index";

const RegularComponent = () => <h1>Hello, this is calculator!</h1>;
const ComponentWithError = () => {
  throw new Error("Test error");
};

const meta: Meta<typeof ErrorBoundary> = {
  title: "Component/ErrorBoundary",
  component: ErrorBoundary,
  argTypes: {
    children: {
      name: "Children",
      description: "Children to render",
      defaultValue: undefined,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorBoundary>;

export const Primary: Story = {
  render: () => (
    <ErrorBoundary>
      <RegularComponent />
    </ErrorBoundary>
  ),
};

export const WithError: Story = {
  render: () => (
    <ErrorBoundary>
      <ComponentWithError />
    </ErrorBoundary>
  ),
};
