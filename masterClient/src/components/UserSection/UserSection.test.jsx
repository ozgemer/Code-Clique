import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserSection from './UserSection';
import MockUserImage from '../../assets/images/mock-user-image.svg';

describe('UserSection', () => {
  it('should render the username that was passed as a prop', () => {
    render(<UserSection name='testname' />);
    const headingElement = screen.getByText('testname');
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the role that was passed as a prop', () => {
    // eslint-disable-next-line jsx-a11y/aria-role
    render(<UserSection role='testrole' />);
    const headingElement = screen.getByText('testrole');
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the image that was passed as a prop', () => {
    render(<UserSection img={MockUserImage} />);
    const imgElement = screen.getByAltText('User image');
    expect(imgElement).toHaveAttribute('src', MockUserImage);
  });

  it('should render a default image if no other image was passed as props', () => {
    render(<UserSection />);
    const imgElement = screen.getByAltText('User image');
    expect(imgElement).toHaveAttribute('src', MockUserImage);
  });
});
