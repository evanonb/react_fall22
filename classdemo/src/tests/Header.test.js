import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header', () => {
    Object.defineProperty(window, 'matchMedia', {
        value: () => {
            return {
                matches: false,
                addEventListener: () => {},
                removeEventListener: () => {}
            }
        }
    })
    render(<Header/>);
    const linkElement = screen.getByText(/and save to reload/i);
    const count = screen.getByText(/You have clicked on the button 0 times!/i);
    expect(linkElement).toBeInTheDocument();
    expect(count).toBeInTheDocument();
    const button = screen.getByRole('button');
    fireEvent.click(button);
});
