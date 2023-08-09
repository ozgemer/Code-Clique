import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

const customRouterRender = (ui) => {
  return render(<Router location='Dashboard'>{ui}</Router>);
};

describe('Sidebar', () => {
  it('should be visible', () => {
    customRouterRender(<Sidebar />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeVisible();
  });

  it('should render Code Clique logo', () => {
    customRouterRender(<Sidebar />);
    const imgElement = screen.getByAltText('CodeClique');
    expect(imgElement).toBeInTheDocument();
  });

  it('should render all the page buttons', () => {
    const pages = ['Dashboard', 'Board', 'Specs', 'Logs', 'Settings'];
    customRouterRender(<Sidebar />);
    pages.map((page) => {
      const regex = new RegExp(page);
      const buttonElement = screen.getByRole('button', { name: regex });
      return expect(buttonElement).toBeInTheDocument();
    });
  });
});
