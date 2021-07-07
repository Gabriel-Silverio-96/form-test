import { render } from "@testing-library/react";
import Select from 'Components/Select';

test('should show select render', () => {
    const {container} = render(<Select />);
    const select = container.querySelector('select');
    
    expect(select).toBeInTheDocument();
})