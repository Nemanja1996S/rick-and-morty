import { it, expect, describe, beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('group', () => {
    it('should', async () => {
        expect(1).toBeTruthy();
    })
})