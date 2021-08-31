import { fireEvent, render } from "@testing-library/react";
import Button from "Components/Button";

test("should show the button and a click call", () => {
    const onClick = jest.fn();
    const { container } = render(<Button
        type="submit" name="test"
        onClick={onClick}
    />

    );
    const button = container.querySelector("button") as HTMLButtonElement;

    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveTextContent("test");

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
})