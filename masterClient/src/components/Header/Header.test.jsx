import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from './Header';
import { PageContext } from '../../contexts/PageContext';

const customContextRender = (ui) => {
  return render(
    <Router location='/Dashboard'>
      <PageContext>{ui}</PageContext>
    </Router>
  );
};

describe('Header', () => {
  it('should render the correct page name', () => {
    customContextRender(<Header />);
    const headingElement = screen.getByRole('heading', {
      name: /dashboard/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('page name should be visible', () => {
    customContextRender(<Header />);
    const headingElement = screen.getByRole('heading', {
      name: /dashboard/i,
    });
    expect(headingElement).toBeVisible();
  });
});
