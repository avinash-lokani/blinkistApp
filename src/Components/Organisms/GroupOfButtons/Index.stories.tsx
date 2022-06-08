import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ButtonGroup from './Index'

export default{
    title: "Molecule/ButtonsGroup",
    component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
    <BrowserRouter><ButtonGroup {...args}/></BrowserRouter>
);

export const ButtonsGrp = Template.bind({});