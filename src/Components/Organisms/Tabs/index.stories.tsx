import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabBar from "./Index";
import { BrowserRouter } from "react-router-dom";

export default {
	title: "Organism/TabsBar",
	component: TabBar,
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = () => <BrowserRouter><TabBar /></BrowserRouter>;

export const Tabsbar = Template.bind({});