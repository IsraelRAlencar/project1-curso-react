import { PostCard } from ".";
import { render, screen } from "@testing-library/react";
import { PostCardPropsMock } from "./mock";

const props = PostCardPropsMock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard { ...props }/>);

        expect(screen.getByRole('img', {name: props.title})).toHaveAttribute('src', props.cover);
        expect(screen.getByRole('heading', {name: props.title})).toBeInTheDocument();
        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const { container } = render(<PostCard { ...props }/>);
        expect(container.firstChild).toMatchSnapshot();
    });
});