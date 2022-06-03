import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import CardGroup from './Index';
import BookData from "../../Data/BooksData";



export default{
    title: "Organism/CardGroup",
    component: CardGroup,
} as ComponentMeta<typeof CardGroup>;

const Template : ComponentStory<typeof CardGroup> = args => (
    <CardGroup {...args}></CardGroup>
);

export const CardGroupStory = Template.bind({});

CardGroupStory.args = {
    title: "Trending blinks",
    bookData : BookData
}