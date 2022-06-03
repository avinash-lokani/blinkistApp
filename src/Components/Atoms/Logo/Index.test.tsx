import { render, screen } from "@testing-library/react";
import BrandLogo from "./Index";

test("should render logo", () => {
    render(<BrandLogo/>);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
})