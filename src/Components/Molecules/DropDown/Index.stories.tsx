import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropdown from "./Index";

export default {
    title: "Molecule/DropDown",
    component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => (
    <Dropdown {...args}/>
);

export const ExploreDropdown = Template.bind({});
ExploreDropdown.args = {
    title: "Explore",
};

export const AccountDropdown = Template.bind({});
AccountDropdown.args = {
    title: "Account"
}