import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserIcon, TimeIcon } from "../../../Icons";
import Reads from './Index'

export default{
    title: "Molecule/Reads",
    component: Reads
} as ComponentMeta<typeof Reads>;

const Template : ComponentStory<typeof Reads> = args => (
    <Reads {...args} />
);

export const ReadBooks = Template.bind({});
ReadBooks.args = {
    children: "1.9k reads",
    startIcon: (<UserIcon
    style={{position: "relative", top: "2px", width: "20px", height: "20px"}}
    />
    )
};

export const Time = Template.bind({});

Time.args = {
  children: "13-minute read",
  startIcon: (
    <TimeIcon
    fontSize="large"
    sx={{ position: "relative", top: "2px", width: "20px", height: "20px" }}
    />
  )
};