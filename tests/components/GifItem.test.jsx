import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';
s;
describe('Test in <GifItem/>', () => {
   const title = 'Saitama';
   const url = 'https://one-punch.com/saitama.jpg';

   test('should match with snapshot', () => {
      const { container } = render(<GifItem title={title} url={url} />);
      expect(container).toMatchSnapshot();
   });
});
