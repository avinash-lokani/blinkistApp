import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabBar from "./Index";

export default {
	title: "Organism/TabsBar",
	component: TabBar,
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = () => <TabBar />;

export const Tabsbar = Template.bind({});