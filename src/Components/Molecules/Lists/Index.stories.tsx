import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Lists from "./Index";

export default {
	title: "Molecule/Lists",
	component: Lists,
} as ComponentMeta<typeof Lists>;

const Template: ComponentStory<typeof Lists> = () => <Lists />;

export const Primary = Template.bind({});

Primary.args = {};
