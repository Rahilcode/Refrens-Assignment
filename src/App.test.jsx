import { describe, it, expect } from "vitest";
import App from "./App";

describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    expect(<App />).not.toBeNull();
  });
});
