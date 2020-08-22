import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Should App render', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to the trivia challenge!/i);
  expect(linkElement).toBeInTheDocument();
});
