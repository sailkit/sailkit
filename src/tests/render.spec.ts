import { describe, it, expect } from 'vitest';
import { renderComponentAsEmailTemplate } from '$lib/render.js';
import Base from './components/Base.svelte';
import pretty from 'pretty';

describe('renderComponentAsEmailTemplate', () => {
	it('should render a simple email component', async () => {
		const result = await renderComponentAsEmailTemplate(Base, {
			text: 'Test Prop'
		});

		expect(result).toHaveProperty('html');
		expect(result).toHaveProperty('plainText');
		expect(result).toHaveProperty('meta');

		expect(result.meta).toHaveProperty('renderTime');
		expect(result.meta).toHaveProperty('size');

		expect(result.html).toContain('Hello World');
		expect(result.html).toContain('Test Prop');
		expect(result.plainText).toContain('HELLO WORLD');
		expect(result.plainText).toContain('Test Prop');
	});

	it('should handle render options', async () => {
		const result1 = await renderComponentAsEmailTemplate(
			Base,
			{ text: 'Test Prop' },
			{
				plainText: true,
				beautify: false
			}
		);

		expect(result1.plainText).toContain('HELLO WORLD');

		const beautified = pretty(result1.html);

		const result2 = await renderComponentAsEmailTemplate(
			Base,
			{ text: 'Test Prop' },
			{
				plainText: false,
				beautify: true
			}
		);

		expect(result2.plainText).toBe('');
		expect(result2.html).toBe(beautified);
	});

	it('should handle plain text rendering', async () => {
		const result1 = await renderComponentAsEmailTemplate(Base, {
			text: 'Test1'
		});
		const result2 = await renderComponentAsEmailTemplate(Base, {
			text: 'Test2'
		});

		expect(result1.plainText).not.toBe(result2.plainText);
	});
});
