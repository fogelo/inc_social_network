import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {dialogsData, messagesData, postData} from './index';

test('renders learn react link', () => {
  render(<App posts={postData} dialogs={dialogsData} messages={messagesData}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
