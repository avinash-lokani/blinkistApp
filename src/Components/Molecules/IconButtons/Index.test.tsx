import { render, screen } from "@testing-library/react";
import IconButton from "./Index";
import {AddIcon as Add} from "../../../Icons";

describe("Icon with button tests", () => {
  test("Add icon with button", () => {
    render(
      <IconButton
        startIcon={<Add />}
        children="Add to library"
        variant="body1"
      />
    );
    const element = screen.getByText(/Add to library/i);
    expect(element).toBeInTheDocument();
  });
});