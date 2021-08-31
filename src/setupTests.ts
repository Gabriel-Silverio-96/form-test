import "@testing-library/jest-dom";

//MSW
import { server } from "./Mocks/server";
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())