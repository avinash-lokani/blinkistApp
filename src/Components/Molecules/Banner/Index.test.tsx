import { render } from "@testing-library/react";
import Banner from "./index";

describe("Banner", () => {
  test("Banner display", () => {
    render(<Banner />);
  });
});