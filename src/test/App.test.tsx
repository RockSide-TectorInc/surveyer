import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../pages/App';

test('checks Survey Component', () => {
    render(<App/>);
    const linkElement = screen.getByText(/Survey Component/i);
    expect(linkElement).toBeInTheDocument();
});