import React from 'react'
import MyLibrary from './Index';
import Header from '../../Organisms/Header/Index';
import Footer from '../../Organisms/Footer/Index';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default{
    title: "Templates/MyLibrary",
    component: MyLibrary
} as ComponentMeta<typeof MyLibrary>;

const Template : ComponentStory<typeof MyLibrary> = (args) => (
    <BrowserRouter> <MyLibrary {...args}/> </BrowserRouter> 
);

export const LibraryTemplate = Template.bind({});
LibraryTemplate.args = {
    header: <Header />,
    footer: <Footer/>
}