import { render, waitFor } from "@testing-library/react";
import { SelectState, SelectCity } from 'Components/Select';

describe('should show select render', () => {
    
   it('select state', async () => {
    const { getByTestId } = render(<SelectState label='test' name='test' option={[{}]} />);

    const selectGroup = await waitFor(() => getByTestId('select-group'));    
    const label = selectGroup.querySelector('label');
    const select = selectGroup.querySelector('select');
    const span = selectGroup.querySelector('span');

    expect(selectGroup).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(span).toBeInTheDocument();
   })

   it('select city', async () => {
    const { getByTestId } = render(<SelectCity label='test' name='test' option={[{}]} />);

    const selectGroup = await waitFor(() => getByTestId('select-group'));    
    const label = selectGroup.querySelector('label');
    const select = selectGroup.querySelector('select');
    const span = selectGroup.querySelector('span');

    expect(selectGroup).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(select).toBeInTheDocument();
    expect(span).toBeInTheDocument();
   })
})