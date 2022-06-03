import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import BookDetailTab from "./Index";

export default {
  title: "Organism/BookDetailTab",
  component: BookDetailTab,
} as ComponentMeta<typeof BookDetailTab>;

const Template: ComponentStory<typeof BookDetailTab> = (args) => (
  <BookDetailTab {...args} />
);

export const BookDetailsTab = Template.bind({});
BookDetailsTab.args = {
  synopsis:
    "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
  aboutAuthor: "",
  forWhom: "",
};