<script lang="ts">
  let { children } = $props();
</script>

<div
  class="border-border text-background dark:text-foreground overflow-x-auto rounded-lg border bg-sky-900 p-4 text-sm shadow-md"
>
  {@render children?.()}
</div>
