import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test in <AddCategory/>', () => {
   test('should change the value of the text box ', () => {
      render(<AddCategory onNewCategory={() => {}} />);
      const input = screen.getByRole('textbox');

      fireEvent.input(input, { target: { value: 'Saitama' } });

      expect(input.value).toBe('Saitama');
   });
});
