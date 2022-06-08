import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CardGroup from './Index';
import BookData from "../../Data/BooksData";
import { BrowserRouter } from 'react-router-dom';



export default{
    title: "Organism/Cards",
    component: CardGroup,
} as ComponentMeta<typeof CardGroup>;

const Template : ComponentStory<typeof CardGroup> = args => (
    <BrowserRouter><CardGroup {...args}></CardGroup></BrowserRouter>
);

export const CardGroupStory = Template.bind({});

CardGroupStory.args = {
    title: "Trending blinks",
    bookData : BookData
}