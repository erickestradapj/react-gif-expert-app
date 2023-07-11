const { render, screen } = require('@testing-library/react');
const { GifGrid } = require('../../src/components/GifGrid');
const { useFetchGIfs } = require('../../src/hooks/useFetchGIfs');

jest.mock('../../src/hooks/useFetchGIfs');

describe('Test in <GifGrid/>', () => {
  const category = 'One Punch';

  test('should initially show the loading', () => {
    useFetchGIfs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('should display items when loading images useFetchGifs', () => {
    const gifs = [
      {
        id: '1',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: '2',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];

    useFetchGIfs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
