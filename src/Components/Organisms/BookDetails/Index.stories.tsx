import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import BookDetail from './Index'
import cardIm from "../../../../public/images/2.png";
import { BrowserRouter } from 'react-router-dom';

export default{
    title: "Organism/BookDetail",
    component: BookDetail
} as ComponentMeta<typeof BookDetail>;

const Template: ComponentStory<typeof BookDetail> = () => (
   <BrowserRouter><BookDetail/></BrowserRouter> 
);

export const BookStory = Template.bind({});

const bookData = {
    id: 1,
    title: "Beyond Entrepreneurship 2.0",
    author: "Jim Collins & Bill Lazier",
    subTitle: "",
    image: cardIm,
    num:18,
    minute: "15-minute read",
    status: {
        isFinished: false,
        isReading: true,
        sendToKindle: false,
    },
}

BookStory.args = {
  AllBookData: bookData,
}