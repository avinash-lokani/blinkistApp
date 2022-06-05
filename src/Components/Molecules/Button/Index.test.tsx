import { render, screen } from "@testing-library/react";
import Button from "./Button";
import IconButtons from "../IconButtons/Index";
import {AddIcon} from "../../../Icons";

describe("Button", () => {
  test("Buttons", () => {
    render(<Button children={<AddIcon />} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Icon Button", () => {
    render(
      <Button
        children={
          <IconButtons startIcon={<AddIcon />} title="Add" variant="body1" />
        }
      />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

  });
});