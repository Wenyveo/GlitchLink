// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GlitchLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GlitchLink/i);
    expect(titleElement).toBeInTheDocument();
});
