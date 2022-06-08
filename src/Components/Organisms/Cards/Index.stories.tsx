import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Cards from "./Index";
import cardImage from "../../../../public/images/1.png"
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organism/Cards",
  children: Cards,
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => <BrowserRouter><Cards {...args} /></BrowserRouter>;

export const CardStory = Template.bind({});
CardStory.args = {
  image: cardImage,
  title: "Bring Your Human to Work",
  author: "Erica Keswin",
  minutes: "13-minute read",
  reads: "1.9k reads",
  isFinished: false,
};

export const FinishedBook = Template.bind({});
FinishedBook.args = {
  image: cardImage,
  title: "Bring Your Human to Work",
  author: "Erica Keswin",
  minutes: "13-minute read",
  reads: "1.9k reads",
  isFinished: true,
};


export const AddToLib = Template.bind({});
AddToLib.args = {
  image: cardImage,
  title: "Bring Your Human to Work",
  author: "Erica Keswin",
  minutes: "13-minute read",
  reads: "1.9k reads",
  isFinished: false,
  addToLib: true
};