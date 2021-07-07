import { render } from "@testing-library/react";
import Button from 'Components/Button';

test('should show button', () => {
    const {container} = render(<Button type='submit' name='test name' />);
    const button = container.querySelector('button');

    expect(button).toBeInTheDocument();
})