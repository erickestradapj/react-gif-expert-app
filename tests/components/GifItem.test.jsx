import { render, screen } from '@testing-library/react';
import expect from 'expect';
import { GifItem } from '../../src/components/GifItem';

describe('Test in <GifItem/>', () => {
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpg';

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should display image with url and alt', () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('should display title in component', () => {
    render(<GifItem title={title} url={url} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
