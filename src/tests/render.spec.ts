import { describe, it, expect } from 'vitest';
import { renderComponentAsEmailTemplate } from '$lib/render.js';
import pretty from 'pretty';
import { minify } from 'html-minifier-terser';
import { DEFAULT_MINIFY_OPTIONS } from '$lib/defaults.js';
import Base from './assets/Base.svelte';

describe('renderComponentAsEmailTemplate', () => {
  const baseProps = { text: 'Test Prop' };

  it('renders a simple email component with all expected properties', async () => {
    const result = await renderComponentAsEmailTemplate(Base, baseProps);

    // Check structure
    expect(result).toHaveProperty('html');
    expect(result).toHaveProperty('plainText');
    expect(result).toHaveProperty('meta');
    expect(result.meta).toHaveProperty('renderTime');
    expect(result.meta).toHaveProperty('size');

    // Check content
    expect(result.html).toContain('Hello World');
    expect(result.html).toContain('Test Prop');
    expect(result.plainText).toContain('HELLO WORLD');
    expect(result.plainText).toContain('Test Prop');
  });

  it('handles render options correctly', async () => {
    // Default rendering (no special options)
    const result = await renderComponentAsEmailTemplate(Base, baseProps, {
      plainText: true,
      beautify: false,
      minify: false
    });

    const beautified = pretty(result.html);
    const minified = await minify(result.html, DEFAULT_MINIFY_OPTIONS);

    // Default shouldn't match either beautified or minified
    expect(result.html).not.toBe(beautified);
    expect(result.html).not.toBe(minified);
    expect(result.plainText).toContain('HELLO WORLD');

    // Test beautify option
    const beautifiedResult = await renderComponentAsEmailTemplate(Base, baseProps, {
      plainText: false,
      beautify: true,
      minify: false
    });

    expect(beautifiedResult.plainText).toBe('');
    expect(beautifiedResult.html).toBe(beautified);
    expect(beautifiedResult.html).not.toBe(minified);

    // Test minify option
    const minifiedResult = await renderComponentAsEmailTemplate(Base, baseProps, {
      plainText: false,
      beautify: false,
      minify: true
    });

    expect(minifiedResult.plainText).toBe('');
    expect(minifiedResult.html).toBe(minified);
    expect(minifiedResult.html).not.toBe(beautified);
  });

  it('extracts plain text correctly', async () => {
    // Test with different text props
    const result1 = await renderComponentAsEmailTemplate(Base, { text: 'Test1' });
    const result2 = await renderComponentAsEmailTemplate(Base, { text: 'Test2' });

    // Content checks
    expect(result1.plainText).toContain('Test1');
    expect(result2.plainText).toContain('Test2');
    expect(result1.plainText).not.toBe(result2.plainText);

    // HTML tags should be removed
    const htmlTags = ['<div>', '</div>', '<h1>', '</h1>', '<p>', '</p>'];
    htmlTags.forEach((tag) => {
      expect(result1.plainText).not.toContain(tag);
      expect(result2.plainText).not.toContain(tag);
    });
  });
});
