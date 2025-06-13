import { it, expect, describe, vitest } from 'vitest';
import { render, screen } from "@testing-library/react";
import Radiobutton from "../../src/components/Radiobutton";
import "@testing-library/jest-dom/vitest";

const mockedOnChange = vitest.fn();
describe('Radiobutton', () => {
    it('should render radiobutton group with front label and values with default checked given index and onChange function', () => {
        const frontLabel = "Status";
        const values = ["Any", "Dead", "Alive", "Unknown"];
        const index = 0;

        render(<Radiobutton frontLabel={frontLabel} values={values} defaultCheckedIndex={index} onChange={mockedOnChange} ></Radiobutton>);

        expect(screen.getByText(frontLabel)).toBeInTheDocument();
        values.map((value, i) => {
            expect(screen.getByText(value)).toBeInTheDocument();
            if(i === index)
                expect(screen.getByDisplayValue(values[i])).toBeChecked();
        });
        // expect(screen.getAllByRole("radio")).toHaveAttribute("onChange", mockedOnChange)
        // const input = screen.getByRole("radio", {checked: true});
        // expect(input).toHaveValue(values[index])
    })
})