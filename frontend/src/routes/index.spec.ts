/**
 * @jest-environment jsdom
 */

import { render, RenderResult } from '@testing-library/svelte';
import Index from './index.svelte';

describe('Index', () => {
	let renderedComponent: RenderResult;

	beforeEach(() => {
		renderedComponent = render(Index);
	});

	describe('once the component has been rendered', () => {
		test('should show the proper heading', () => {
			expect(renderedComponent.getByText(/HomePage/)).toBeInTheDocument();
		});
	});
});
