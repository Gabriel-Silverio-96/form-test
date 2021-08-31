import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { SelectState, SelectCity } from "Components/Select";

describe("should show select render with props", () => {
   const onChange = jest.fn();

   const optionSelectState = [
      {
         id: 1,
         nome: "testing name",
         sigla: "testing initials",
         regiao: {
            id: 1,
            nome: "testing name",
            sigla: "testing initials"
         }
      }
   ]

   const optionSelectCity = [{
      id: 1,
      nome: "testing city"
   }]

   test("select state", async () => {
      const onChange = jest.fn();
      
      const { getByTestId, getAllByTestId } = render(<SelectState
         label="test" name="test" option={optionSelectState}
         onChange={onChange}
      />);

      const labelNode = await waitFor(() => getByTestId("label-select-state")) as HTMLLabelElement;
      expect(labelNode).toHaveTextContent("test");

      const selectStateNode = await waitFor(() => getByTestId("select-state")) as HTMLSelectElement;
      expect(selectStateNode).toHaveAttribute("name", "test");
      act(() => {
         fireEvent.change(selectStateNode, {
            target: {
               value: "testing initials"
            }
         })
      })

      expect(selectStateNode).toHaveValue("testing initials");

      const optionStateNode = await waitFor(() => getAllByTestId("option-state"));
      const onlyTheFirtsOptionStateNode = optionStateNode[0] as HTMLOptionElement;
      expect(onlyTheFirtsOptionStateNode.textContent).toEqual("testing initials");
   })  
   
   test("select city", async () => {     
      const { getByTestId, getAllByTestId } = render(<SelectCity
         label="test" name="test" option={optionSelectCity}
         onChange={onChange}
      />);

      const labelNode = await waitFor(() => getByTestId("label-select-city")) as HTMLLabelElement;
      expect(labelNode).toHaveTextContent("test");

      const selectCityNode = await waitFor(() => getByTestId("select-city")) as HTMLSelectElement;
      expect(selectCityNode).toHaveAttribute("name", "test");
      act(() => {
         fireEvent.change(selectCityNode, {
            target: {
               value: "testing city"
            }
         })
      })
      expect(selectCityNode).toHaveValue("testing city");

      const optionCityNode = await waitFor(() => getAllByTestId("option-city"));
      const onlyTheFirtsOptionCityNode = optionCityNode[0] as HTMLOptionElement;
      expect(onlyTheFirtsOptionCityNode.textContent).toEqual("testing city");
   })   

   test("select city is loading", async () => {     
      const isLoading = true;
      const { queryByText } = render(<SelectCity
         label="test" name="test" option={optionSelectCity}
         loading={isLoading}
         onChange={onChange}
      />);

      const isLoadingText = queryByText("Loading...");
      expect(isLoadingText).toBeInTheDocument();
   })

   test("select city is disabled", async () => {     
      const isDisabled = "";
      const { getByTestId } = render(<SelectCity
         label="test" name="test" option={optionSelectCity}
         isState={isDisabled}
         onChange={onChange}
      />);

      const selectCityNode = await waitFor(() => getByTestId("select-city")) as HTMLSelectElement;
      expect(selectCityNode).toHaveAttribute("disabled", "");
   })
})