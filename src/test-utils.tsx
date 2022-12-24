import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "./store/store";

interface Props {
  children: React.ReactElement;
}
const CombinedProvider: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={createStore()}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: CombinedProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
