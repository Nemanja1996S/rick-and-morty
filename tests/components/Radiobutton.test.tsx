import { it, expect, describe, vi, afterEach } from 'vitest';
import { cleanup, queryByRole, render, screen } from "@testing-library/react";
import Radiobutton from "../../src/components/Radiobutton";
import "@testing-library/jest-dom/vitest";
import userEvent from '@testing-library/user-event';

describe('Radiobutton', () => {
    const renderRadioButton = () => {
        const frontLabel = "Status";
        const values = ["Any", "Dead", "Alive", "Unknown"];
        const index = 0;
        const onChange = vi.fn();
        render(<Radiobutton frontLabel={frontLabel} values={values} defaultCheckedIndex={index} onChange={onChange} />);
        return {
            frontLabel,
            values,
            index,
            onChange
        }
    };
    afterEach(cleanup);
    it('should render radiobutton group with front label and values with default checked given index', () => {
        const {frontLabel,values,index} = renderRadioButton();

        expect(screen.getByText(frontLabel)).toBeInTheDocument();
        const radios = screen.getAllByRole("radio");
        values.map((value, i) => {
            expect(screen.getByText(value)).toBeInTheDocument();
            expect(radios[i]).toHaveAttribute("value",values[i]);
            if(i === index)
                expect(screen.getByDisplayValue(values[i])).toBeChecked();
        });
    });
    // it('should call onChange function when clicked on radio option', async () => {
    //     const {onChange} = renderRadioButton();

    //     const user = userEvent.setup();
    //     const radios = screen.getAllByRole("radio");
    //     console.log(radios)
    //     await user.click(radios[0]);
        
    //     expect([radios[0]]).toHaveAttribute("checked", true);
    //     expect(onChange).toHaveBeenCalled();
    // })
})