import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./Index";

export default {
	title: "Molecule/SearchBar",
	component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar />;

export const searchBar = Template.bind({});