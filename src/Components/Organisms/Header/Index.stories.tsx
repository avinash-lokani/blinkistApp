import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Index";

export default{
    title: "Organism/Header",
    component: Header
} as ComponentMeta<typeof Header>;

const Template : ComponentStory<typeof Header> = () => (
    <BrowserRouter><Header/></BrowserRouter>
);

export const HeaderStory = Template.bind({});