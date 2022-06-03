import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from "./Index";


export default {
    title: "Atom/Logo",
    component: Logo
} as ComponentMeta<typeof Logo>;

const Template : ComponentStory<typeof Logo> = args => (
    <Logo {...args}/>
);


export const BrandLogo = Template.bind({});