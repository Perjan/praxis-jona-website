import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import HealthCheck from 'app/free-tools/HealthCheck';
vi.mock('next/link', () => ({ default: ({ children, ...props }) => <a {...props}>{children}</a> }));
describe('health check interaction safety', () => {
  it('shows emergency guidance immediately without completing the form', () => {
    render(<HealthCheck kind="perimenopause" locale="en" />);
    fireEvent.click(screen.getByLabelText('Very heavy bleeding with circulatory problems, fainting, sudden breathlessness or chest pain'));
    expect(screen.getByRole('alert')).toHaveTextContent('112');
    expect(screen.queryByRole('link', { name: 'Discuss symptoms with the practice' })).not.toBeInTheDocument();
    expect(screen.queryByText('How old are you?')).not.toBeInTheDocument();
  });
  it('does not silently apply defaults and clears stale results after edits and reset', () => {
    render(<HealthCheck kind="status" locale="en" />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(screen.getByRole('alert')).toHaveTextContent('highlighted');
    fireEvent.click(screen.getByLabelText('For a child / adolescent, or during pregnancy / the postpartum period'));
    fireEvent.click(screen.getByLabelText('None of these'));
    fireEvent.submit(form);
    expect(screen.getByRole('region', { name: 'Your situation needs an individual assessment.' })).toBeInTheDocument();
    const result = screen.getByRole('region', { name: 'Your situation needs an individual assessment.' });
    expect(within(result).getByText('Who is this check for?', { exact: false })).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('For me as an adult, not pregnant and not in the postpartum period'));
    expect(screen.queryByRole('region')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Reset everything' }));
    expect(screen.getByLabelText('For me as an adult, not pregnant and not in the postpartum period')).not.toBeChecked();
  });
});
