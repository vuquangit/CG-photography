import * as React from "react";
import { render } from "@testing-library/react";

import Header from "@/components/Header";

describe("Header", () => {
  it("Test Header render", async () => {
    const { container, getByTestId } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
