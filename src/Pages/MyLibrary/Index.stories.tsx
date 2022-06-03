import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import MyHomePage from './Index'

export default{
    title : "Pages/MyHomePage",
    component: MyHomePage
} as ComponentMeta<typeof MyHomePage>;

const Template : ComponentStory<typeof MyHomePage> = () => (
    <MyHomePage/>
);

export const HomePage = Template.bind({});