import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ExpandedNav from './Index'

export default{
    title: "Organism/NavExpanded",
    component: ExpandedNav
} as ComponentMeta<typeof ExpandedNav>;

const Template : ComponentStory<typeof ExpandedNav> = () => (
   <BrowserRouter><ExpandedNav/></BrowserRouter> 
);

export const ExpandedNavStory = Template.bind({});