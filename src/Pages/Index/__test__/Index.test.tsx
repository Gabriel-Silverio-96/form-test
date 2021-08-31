import { fireEvent, render, waitFor, screen } from "@testing-library/react";
import Index from "Pages/Index";
import { act } from "react-dom/test-utils";

window.alert = jest.fn();

describe("tests home page", () => {
    it("should show form and alert with data user", async () => {
        const { getByTestId, getAllByTestId } = render(<Index />);

        const inputNode = await waitFor(() => getAllByTestId("input"));
        const inputName = inputNode[0] as HTMLInputElement;
        act(() => {
            fireEvent.change(inputName, {
                target: {
                    value: "Name testing"
                }
            })
        })
        expect(inputName).toHaveValue("Name testing");

        const inputEmail = inputNode[1] as HTMLInputElement;
        act(() => {
            fireEvent.change(inputEmail, {
                target: {
                    value: "test@email.com"
                }
            });
        })
        expect(inputEmail).toHaveValue("test@email.com");

        const selectState = await waitFor(() => getByTestId("select-state")) as HTMLSelectElement;
        const optionState = await waitFor(() => getAllByTestId("option-state"));
        const stateRO = optionState[0] as HTMLOptionElement;
        const stateAC = optionState[1] as HTMLOptionElement;
        act(() => {
            fireEvent.change(selectState, {
                target: {
                    value: "AC"
                }
            })
        })

        expect((stateRO).selected).toBe(false);
        expect((stateAC).selected).toBe(true);
        expect(selectState).toHaveValue("AC");
        
        await waitFor(() => undefined);

        const selectCity = await waitFor(() => screen.getByTestId("select-city")) as HTMLSelectElement;
        const optionCity = await waitFor(() => getAllByTestId("option-city"));
        const cityAcrelandia = optionCity[0] as HTMLOptionElement;
        const cityBrasileia = optionCity[1] as HTMLOptionElement;
        act(() => {
            fireEvent.change(selectCity, {
                target: {
                    value: "Acrelândia"
                }
            })
        })   
        
        expect((cityAcrelandia).selected).toBe(true);
        expect((cityBrasileia).selected).toBe(false);        
        expect(selectCity).toHaveValue("Acrelândia");

        const inputOccupation = inputNode[2] as HTMLInputElement;
        act(() => {
            fireEvent.change(inputOccupation, {
                target: {
                    value: "Chef"
                }
            });
        })
        expect(inputOccupation).toHaveValue("Chef");

        const formButton = await waitFor(() => getByTestId("form-button")) as HTMLButtonElement;
        fireEvent.click(formButton);
        expect(window.alert).toHaveBeenCalledTimes(1);
    })
})