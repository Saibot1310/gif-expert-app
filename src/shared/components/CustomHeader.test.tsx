import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CustomHeader } from './CustomHeader';

describe('CustomHeader', () => {
  const title = 'Title test';
  const description = 'description test';

  test('should render the title correctly', () => {
    render(<CustomHeader title={title} />);

    expect(screen.getByText(title)).toBeDefined();
    expect(screen.getByText(title)).not.toBeNull();
  });

  test('should render the description when provided', () => {
    render(<CustomHeader title={title} description={description} />);

    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph').innerHTML).toBe(description);
  });

  test('should not render description when not proviced', () => {
    const { container } = render(<CustomHeader title={title} />);

    const divElement = container.querySelector('.content-center');
    const h1 = divElement?.querySelector('h1');
    const p = divElement?.querySelector('p');

    expect(h1?.innerHTML).toBe(title);
    expect(p?.innerHTML).toBeUndefined();
  });
});
