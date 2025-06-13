import { it, expect, describe, vitest } from 'vitest';
import { render, screen } from "@testing-library/react";
import CharacterCard from "../../src/components/CharacterCard";
import "@testing-library/jest-dom/vitest";
import { useRef } from 'react';

const mockedOnChange = vitest.fn();
describe('CharacterCard', () => {
    it('should render character image with his name. Image should not have ref attribute', () => {
        const imgSrc = "/some/address";
        const characterName = "Rick";
        const ref = null;

        render(<CharacterCard imgSrc={imgSrc} characterName={characterName} imgRef={ref} />)

        expect(screen.getByRole('heading')).toHaveTextContent(characterName);
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", imgSrc);
        expect(img).not.toHaveAttribute("ref", ref);
    })
})