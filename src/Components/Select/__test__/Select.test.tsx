import { render } from "@testing-library/react";
import { SelectState } from 'Components/Select';

test('should show select render', () => {
    const { container } = render(<SelectState label='test' name='test' option={[{}]} />);
    const select = container.querySelector('select');

    expect(select).toBeInTheDocument();
})