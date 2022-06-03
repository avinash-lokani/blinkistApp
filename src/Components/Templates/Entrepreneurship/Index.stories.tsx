import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Banner from '../../Molecules/Banner/index';
import SearchBar from '../../Molecules/SearchBar/Index';
import Footer from '../../Organisms/Footer/Index';
import Header from '../../Organisms/Header/Index';
import Entrepreneurship from './Index'

export default{
    title: "Templates/Entrepreneurship",
    component: Entrepreneurship
} as ComponentMeta<typeof Entrepreneurship>;

const Template: ComponentStory<typeof Entrepreneurship> = (args) => (
    <Entrepreneurship {...args} />
);

export const EntrepreneurshipStory = Template.bind({});
EntrepreneurshipStory.args = {
    header: <Header/>,
    searchBar: <SearchBar/>,
    banner: <Banner/>,
    footer: <Footer/>
}