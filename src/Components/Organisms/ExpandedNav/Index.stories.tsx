import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ExpandedNav from './Index'

export default{
    title: "Organism/ExpandedNav",
    component: ExpandedNav
} as ComponentMeta<typeof ExpandedNav>;

const Template : ComponentStory<typeof ExpandedNav> = () => (
    <ExpandedNav/>
);

export const ExpandedNavStory = Template.bind({});