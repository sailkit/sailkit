<script lang="ts">
  let { children } = $props();
</script>

<div
  class="overflow-x-auto rounded-lg border border-border bg-sky-900 p-4 text-sm text-background shadow-md dark:text-foreground"
>
  {@render children?.()}
</div>
