import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import EntrePage from "./Index";

export default{
    title: "Pages/EntrePage",
    component: EntrePage
} as ComponentMeta<typeof EntrePage>;

const Template : ComponentStory<typeof EntrePage> = () => (
    <BrowserRouter><EntrePage/></BrowserRouter>
);

export const EntrepreneurshipPage = Template.bind({});