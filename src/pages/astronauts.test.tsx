import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { render, screen } from '@testing-library/react';
import Astronaut from './astronauts';

import '@testing-library/jest-dom'

const server = setupServer(
  rest.get('http://api.open-notify.org/astros.json', (req: any, res: any, ctx: any) => {
    return res(ctx.json({
        "people": [
            {
                "name": "Sergey Prokopyev",
                "craft": "ISS"
            },
            {
                "name": "Dmitry Petelin",
                "craft": "ISS"
            },
            {
                "name": "Frank Rubio",
                "craft": "ISS"
            },
            {
                "name": "Jing Haiping",
                "craft": "Tiangong"
            },
            {
                "name": "Gui Haichow",
                "craft": "Tiangong"
            },
            {
                "name": "Zhu Yangzhu",
                "craft": "Tiangong"
            },
            {
                "name": "Jasmin Moghbeli",
                "craft": "ISS"
            },
            {
                "name": "Andreas Mogensen",
                "craft": "ISS"
            },
            {
                "name": "Satoshi Furukawa",
                "craft": "ISS"
            },
            {
                "name": "Konstantin Borisov",
                "craft": "ISS"
            },
            {
                "name": "Oleg Kononenko",
                "craft": "ISS"
            },
            {
                "name": "Nikolai Chub",
                "craft": "ISS"
            },
            {
                "name": "Loral O'Hara",
                "craft": "ISS"
            }
        ],
        "number": 13,
        "message": "success"
    }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders initial loading', () => {
  render(<Astronaut />);
  const loadingText = screen.getByText(/Loading/);
  expect(loadingText).toBeInTheDocument();
});

test('renders astronauts after fetching', async () => {
  render(<Astronaut />);
  const astronautText = await screen.findByText(/There are 13 astronauts in space/);
  expect(astronautText).toBeInTheDocument();
});
