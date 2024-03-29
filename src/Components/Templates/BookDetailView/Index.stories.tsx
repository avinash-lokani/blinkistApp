import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "../../Organisms/Header/Index";
import Footer from "../../Organisms/Footer/Index";
import BookDetailView from "./Index";
import BookDetail from "../../Organisms/BookDetails/Index";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Templates/BookDetailView",
  component: BookDetailView,
} as ComponentMeta<typeof BookDetailView>;

const Template: ComponentStory<typeof BookDetailView> = (args) => (
  <BrowserRouter><BookDetailView {...args} /></BrowserRouter>
);

export const ViewBookDetails = Template.bind({});
ViewBookDetails.args = {
  header: <Header />,
  footer: <Footer />,
  bookDetailOrg: (
    <BookDetail/>
  ),
};