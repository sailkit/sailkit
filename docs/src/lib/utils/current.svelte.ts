import { page } from '$app/state';

export const current = () => {
  let current = $derived({
    category: page.params.category
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    doc: page.params.doc
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  });

  return current;
};
