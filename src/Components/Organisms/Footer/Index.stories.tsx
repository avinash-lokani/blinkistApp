import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import Footer from './Index'


export default{
    title: "Organism/Footer",
    component:  Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => (
    <Footer  />
);

export const FooterStory = Template.bind({});