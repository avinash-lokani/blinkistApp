import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import MyHomePage from './Index'

export default{
    title : "Pages/MyHomePage",
    component: MyHomePage
} as ComponentMeta<typeof MyHomePage>;

const Template : ComponentStory<typeof MyHomePage> = () => (
    <BrowserRouter><MyHomePage/></BrowserRouter>
);

export const HomePage = Template.bind({});