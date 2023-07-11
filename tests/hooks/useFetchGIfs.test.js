import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGIfs } from '../../src/hooks/useFetchGIfs';

describe('Test in useFetchGifs hook', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGIfs('One Punch'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of images and isLoading set to false', async () => {
    const { result } = renderHook(() => useFetchGIfs('One Punch'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0),
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
