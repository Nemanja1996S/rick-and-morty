import { it, expect, describe } from 'vitest';
import { render, screen } from "@testing-library/react";
import CharacterCardList from "../../src/components/CharacterCardList";
import "@testing-library/jest-dom/vitest";
import { Character } from '../../src/services/character-service';

describe('CharacterCardList', () => {
    it('should not render anything', () => {
        render(<CharacterCardList characterArray={[]} lastCardImgRef={null} />)

        expect(screen.getByRole("generic")).toBeEmptyDOMElement();
    });

    it('should render character card list', () => {
        const characterArray : Character[] = [{
            id: 1,
            name: 'Rick',
            status: 'Alive',
            image: '/rick/img'
        },
        {
            id: 2,
            name: 'Morty',
            status: 'Alive',
            image: '/morty/img'
        }];

        render(<CharacterCardList characterArray={characterArray} lastCardImgRef={null} />);

        const headings = screen.getAllByRole("heading");
        const imgs = screen.getAllByRole("img");
        headings.map((_, i) => {
            expect(headings[i]).toHaveTextContent(characterArray[i].name);
            expect(imgs[i]).toHaveAttribute("src", characterArray[i].image)
        });
    })
})