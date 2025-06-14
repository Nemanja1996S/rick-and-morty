import { it, expect, describe, vi, afterEach, afterAll, beforeAll } from 'vitest';
import { cleanup, queryByRole, render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import Home from "../../src/pages/Home";
import "@testing-library/jest-dom/vitest";
import { delay, http, HttpResponse } from 'msw';
import { server } from '../mocks/server';

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
afterEach(() => {
  cleanup()
})
describe('Home', () => {
    it('should render skeletons when loading', async () => {
        const response = await http.get('/character', () => {
            delay();
            return HttpResponse.json([])
        })

        render(<Home/>);
        
        expect(screen.getByRole("progressbar", {name : /characters/i})).toBeInTheDocument();
    });
    // it('should hide skeletons when characters are fetched', async() => {
    //     render(<Home/>);

    //     await waitForElementToBeRemoved(() => screen.getByRole("progressbar", {name: /characters/i}));
    // })
})