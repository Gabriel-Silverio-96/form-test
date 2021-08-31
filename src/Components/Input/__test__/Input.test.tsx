import { fireEvent, render, waitFor } from "@testing-library/react";
import Input from "Components/Input";

test("should show input render with props", async () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input type="text" name="name" label="name" onChange={onChange}/>);    

    const labelNode = await waitFor(() => getByTestId("label-input")) as HTMLLabelElement;
    expect(labelNode).toHaveTextContent("name");    

    const inputNode = await waitFor(() => getByTestId("input")) as HTMLInputElement;        
    expect(inputNode).toHaveAttribute("type", "text");
    expect(inputNode).toHaveAttribute("name", "name");

    fireEvent.change(inputNode, {
       target: {
           value: "Testing input"
       }
    })

    expect(inputNode).toHaveValue("Testing input");    
})