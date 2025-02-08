import { describe, it, expect } from 'vitest';
import { renderComponentAsEmailTemplate } from '$lib/render.js';
import pretty from 'pretty';
import { minify } from 'html-minifier-terser';
import Base from './assets/Base.svelte';
import { DEFAULT_MINIFY_OPTIONS } from '$lib/defaults.js';

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
    const result = await renderComponentAsEmailTemplate(
      Base,
      { text: 'Test Prop' },
      {
        plainText: true,
        beautify: false,
        minify: false
      }
    );

    expect(result.plainText).toContain('HELLO WORLD');

    const beautified = pretty(result.html);
    const minified = await minify(result.html, { ...DEFAULT_MINIFY_OPTIONS });

    expect(result.html).not.toBe(beautified);
    expect(result.html).not.toBe(minified);

    const beautifiedResult = await renderComponentAsEmailTemplate(
      Base,
      { text: 'Test Prop' },
      {
        plainText: false,
        beautify: true,
        minify: false
      }
    );

    expect(beautifiedResult.plainText).toBe('');
    expect(beautifiedResult.html).toBe(beautified);
    expect(beautifiedResult.html).not.toBe(minified);

    const minifiedResult = await renderComponentAsEmailTemplate(
      Base,
      {
        text: 'Test Prop'
      },
      {
        plainText: false,
        beautify: false,
        minify: true
      }
    );

    expect(minifiedResult.plainText).toBe('');
    expect(minifiedResult.html).toBe(minified);
    expect(minifiedResult.html).not.toBe(beautified);
  });

  it('should handle plain text extraction', async () => {
    const result1 = await renderComponentAsEmailTemplate(Base, {
      text: 'Test1'
    });
    const result2 = await renderComponentAsEmailTemplate(Base, {
      text: 'Test2'
    });

    expect(result1.plainText).toContain('Test1');
    expect(result2.plainText).toContain('Test2');
    expect(result1.plainText).not.toContain('<div>');
    expect(result2.plainText).not.toContain('<div>');
    expect(result1.plainText).not.toContain('</div>');
    expect(result2.plainText).not.toContain('</div>');
    expect(result1.plainText).not.toContain('<h1>');
    expect(result2.plainText).not.toContain('<h1>');
    expect(result1.plainText).not.toContain('</h1>');
    expect(result2.plainText).not.toContain('</h1>');
    expect(result1.plainText).not.toContain('<p>');
    expect(result2.plainText).not.toContain('<p>');
    expect(result1.plainText).not.toContain('</p>');
    expect(result2.plainText).not.toContain('</p>');
    expect(result1.plainText).not.toBe(result2.plainText);
  });
});
