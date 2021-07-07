import { render } from "@testing-library/react";
import Input from 'Components/Input';

test('should show input render', () => {
    const { container } = render(<Input type='text' name='name' label='name' onChange={() => undefined}/>);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
})