import { it, expect, describe, vi, beforeEach, afterEach } from 'vitest';
import { cleanup, render, screen } from "@testing-library/react";
import Toolbar from "../../src/components/Toolbar";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";


describe('Toolbar', () => {
    const renderToolbar = () => {
        const onChange = vi.fn();
        render(<Toolbar onChange={onChange}/>);
        return {
            img: screen.getByRole('img'),
            input: screen.getByRole("textbox"),
            onChange
        }
    }
    afterEach(cleanup);
    it('should render toolbar with icon and input for search', () => {
        const {img,input} = renderToolbar();

        expect(img).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });
    it('should call onChange when typed', async () => {
        const {input, onChange} = renderToolbar();
        const user = userEvent.setup();
        const searchText = "Ricky";
        await user.type(input, searchText);

        // expect(onChange).toHaveBeenCalledWith(searchText);
        expect(onChange).toHaveBeenCalled();
    });
})