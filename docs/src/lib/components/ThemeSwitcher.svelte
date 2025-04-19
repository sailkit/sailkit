<script lang="ts">
  // Utils
  import { toggleMode, mode } from 'mode-watcher';
  import { fly } from 'svelte/transition';

  // Components
  import { Button } from '$components/ui/button';

  // Icons
  import { Sun, Moon } from 'svelte-radix';

  $effect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key === 'd') {
        toggleMode();
      }
    };

    window.addEventListener('keydown', keyListener);

    return () => {
      window.removeEventListener('keydown', keyListener);
    };
  });
</script>

{#if $mode}
  <Button
    id="theme-switcher"
    aria-label="Switch themes"
    variant="outline"
    size="icon"
    class="rounded-full"
    onclick={toggleMode}
  >
    {#if $mode === 'dark'}
      <span in:fly={{ y: 20, duration: 300 }}>
        <Sun size="16" />
      </span>
    {:else}
      <span in:fly={{ y: -10, duration: 300 }}>
        <Moon size="16" />
      </span>
    {/if}
  </Button>
{/if}
