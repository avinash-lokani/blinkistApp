import { render, screen } from "@testing-library/react";
import Icons from "./Icons";
import { SearchIcon, DownArrowIcon } from "../../../Icons";

test("should render downArrow Icon", () => {
    render(<Icons children = {<DownArrowIcon/>}/>);
    expect(screen.getByRole("icon")).toBeInTheDocument();
});

test("should render searchIcon Icon", () => {
    render(<Icons children = {<SearchIcon/>}/>);
    expect(screen.getByRole("icon")).toBeInTheDocument();
});