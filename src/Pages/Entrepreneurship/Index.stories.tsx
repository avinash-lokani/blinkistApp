import { ComponentMeta, ComponentStory } from "@storybook/react";
import EntrePage from "./Index";

export default{
    title: "Pages/EntrePage",
    component: EntrePage
} as ComponentMeta<typeof EntrePage>;

const Template : ComponentStory<typeof EntrePage> = () => (
    <EntrePage/>
);

export const EntrepreneurshipPage = Template.bind({});