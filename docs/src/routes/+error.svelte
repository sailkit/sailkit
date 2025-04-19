<script>
  // Stores
  import { page } from '$app/state';
</script>

<div class="flex flex-1 flex-col items-center justify-center">
  <h1 class="my-2 text-2xl font-bold md:text-5xl">
    {page.error?.message}
  </h1>
  <p>
    <a href="/" class="text-muted-foreground/80 hover:text-muted-foreground text-base md:text-xl"
      >Go back home</a
    >
  </p>
</div>
