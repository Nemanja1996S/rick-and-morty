import { it, expect, describe, vitest } from 'vitest';
import { render, screen } from "@testing-library/react";
import Toolbar from "../../src/components/Toolbar";
import "@testing-library/jest-dom/vitest";

const mockedOnChange = vitest.fn();
describe('Toolbar', () => {
    it('should render toolbar with icon and input for search with onChange function prop', () => {
        render(<Toolbar onChange={mockedOnChange}></Toolbar>);

        const img = screen.getByRole('img');
        expect(img).toBeInTheDocument();

        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();
    })
})