import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import ButtonGroup from './Index'

export default{
    title: "Molecule/ButtonGroup",
    component: ButtonGroup
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
    <ButtonGroup {...args}/>
);

export const ButtonsGrp = Template.bind({});