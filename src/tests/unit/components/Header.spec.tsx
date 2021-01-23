import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import Header from "@/components/Header";
import { initializeStore } from "@/store/";

describe("Header", () => {
  it("Test Header render", async () => {
    const store = initializeStore();

    const { container, getByTestId } = render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
