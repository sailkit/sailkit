<script lang="ts">
  // Env Variables
  import { PUBLIC_BASE_URL } from '$env/static/public';

  // Assets
  import metaImage from '$lib/assets/meta_image.png';

  interface Props {
    title?: string;
    image?: string;
    url?: string;
  }

  let {
    title = $bindable(),
    image = $bindable(metaImage),
    url = $bindable(PUBLIC_BASE_URL)
  }: Props = $props();

  const description =
    'SailKit is an open-source toolkit for composing responsive email templates in SvelteKit applications.';

  $effect(() => {
    title = title ? `${title} | SailKit` : 'SailKit';
  });
</script>

<svelte:head>
  <!-- Primary tags -->
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="image" content={image} />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content={url} />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
</svelte:head>
