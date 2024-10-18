import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../views/SearchForm";
import { describe, expect, test, vi } from "vitest";

describe("SearchForm", () => {
  test("renders the form with default values and submits correct data", () => {
    const mockSearch = vi.fn();

    render(<SearchForm onSearch={mockSearch("US", "90210")} />);

    // initial value US
    const countrySelect = screen.getByTestId("country-select");
    expect(countrySelect).toHaveValue("US");

    // mock adding the value 90210
    const zipCodeInput = screen.getByTestId("zip-select");
    fireEvent.change(zipCodeInput, { target: { value: "90210" } });

    // mock the execution of the function
    const submitButton = screen.getByText("Buscar");
    fireEvent.click(submitButton);

    expect(mockSearch).toHaveBeenCalledWith("US", "90210");
  });
});
