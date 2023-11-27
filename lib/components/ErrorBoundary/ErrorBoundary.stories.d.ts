import { Meta, StoryObj } from "@storybook/react";
import ErrorBoundary from "./index";
declare const meta: Meta<typeof ErrorBoundary>;
export default meta;
type Story = StoryObj<typeof ErrorBoundary>;
export declare const Primary: Story;
export declare const WithError: Story;
