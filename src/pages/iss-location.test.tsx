import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { act, render, screen } from '@testing-library/react';
import IssLocation from './iss-location';

import '@testing-library/jest-dom'

const server = setupServer(
    rest.get('http://api.open-notify.org/iss-now.json', (req: any, res: any, ctx: any) => {
        return res(ctx.json({
            iss_position: {
                latitude: -12,
                longitude: 34,
            }
        }))
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('renders initial page', () => {
    render(<IssLocation />);
    const descriptionText = screen.getByText(/The ISS flies over the earth constantly/);
    expect(descriptionText).toBeInTheDocument();

    const loadingText = screen.getByText(/Loading/);
    expect(loadingText).toBeInTheDocument();
});

test('renders the ISS on the page', async () => {
    render(<IssLocation />);

    await act( async() => {
        await new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 250)
        })
    }
    )
    const issElement = await screen.getByAltText(/Marker/);
    expect(issElement).toBeInTheDocument();
});
