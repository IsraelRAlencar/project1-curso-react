import { Button } from '.';
const { render, screen, fireEvent } = require("@testing-library/react");

describe('<Button />', () => {
    it('should render the button with the text "Load more"', () => {
        render(<Button text="Load more"/>);
        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button text="Load more" onClick={fn}/>);

        const button = screen.getByRole('button', { name: /load more/i });

        // userEvent.click(button);
        fireEvent.click(button);

        expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should be disabled if disabled is true', () => {
        render(<Button text="Load more" disabled={true}/>);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeDisabled();
    });
    
    it('should be enabled if disabled is false', () => {
        render(<Button text="Load more" disabled={false}/>);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeEnabled();
    });
});