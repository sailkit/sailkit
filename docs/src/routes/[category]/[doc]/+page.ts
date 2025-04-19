import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const doc = await import(`$lib/docs/${params.category}/${params.doc}.md`);

    return {
      content: doc.default,
      details: doc.metadata,
      metadata: {
        title: doc.metadata.title
      }
    };
  } catch (e) {
    console.log(e);
    throw error(404, 'Oops, the page you are looking for does not exist.');
  }
}
