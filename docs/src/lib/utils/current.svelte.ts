import { page } from '$app/state';

export const getCurrent = () => {
  return {
    category: page.params.category
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    doc: page.params.doc
      ?.split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  };
};
