import { fireEvent, render, waitFor } from '@testing-library/react';
import Index from 'Pages/Index';

describe('tests home page', () => {

    it('should show form and alert with data user', async () => {
        const { getByTestId } = render(<Index />);
        const form = await waitFor(() => getByTestId('form'));
        expect(form).toBeInTheDocument();

        const testString = 'testing';
        const inputName = await waitFor(() => getByTestId("input-full-name")) as HTMLInputElement;
        fireEvent.change(inputName, {
            target: {
                value: testString
            }
        })
        expect(inputName.value).toEqual(testString);

        const inputEmail = await waitFor(() => getByTestId("input-email")) as HTMLInputElement;
        fireEvent.change(inputEmail, {
            target: {
                value: testString
            }
        });
        expect(inputName.value).toEqual(testString);

        const selectState = await waitFor(() => getByTestId("select-state")) as HTMLSelectElement;
        fireEvent.change(selectState, {
            target: {
                value: testString
            }
        });
        expect(inputName.value).toEqual(testString);

        const selectCity = await waitFor(() => getByTestId("select-city")) as HTMLSelectElement;
        fireEvent.change(selectCity, {
            target: {
                value: testString
            }
        });

        const inputOccupation = await waitFor(() => getByTestId("input-occupation")) as HTMLInputElement;
        fireEvent.change(inputOccupation, {
            target: {
                value: testString
            }
        });
        expect(inputName.value).toEqual(testString);

        const formButton = await waitFor(() => getByTestId("form-button")) as HTMLButtonElement;
        fireEvent.change(formButton);
    })
})