<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs';
  import { Button } from '$lib/components/ui/button';
  import { Copy, Check } from 'lucide-svelte';

  const packageManagers = [
    { id: 'npm', name: 'npm', command: 'install' },
    { id: 'pnpm', name: 'pnpm', command: 'add' },
    { id: 'yarn', name: 'yarn', command: 'add' },
    { id: 'bun', name: 'bun', command: 'add' }
  ];

  let selectedManager = $state(packageManagers[0].id);
  let copied = $state(false);
</script>

<Tabs.Root value={selectedManager}>
  <Tabs.List class="mb-1 grid w-full grid-cols-4">
    {#each packageManagers as manager (manager.id)}
      <Tabs.Trigger value={manager.id}>{manager.name}</Tabs.Trigger>
    {/each}
  </Tabs.List>
  {#each packageManagers as manager (manager.id)}
    <Tabs.Content
      value={manager.id}
      class="rounded-lg bg-cyan-950 p-4 font-mono text-sm text-slate-50"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <strong class="text-slate-50">{manager.name} {manager.command}</strong>
          <span class="text-slate-50">sailkit mjml</span>
        </div>
        <div class="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onclick={() => {
              navigator.clipboard.writeText(`${manager.name} ${manager.command} sailkit mjml`);
              copied = true;
              setTimeout(() => {
                copied = false;
              }, 1000);
            }}
          >
            {#if copied}
              <Check size={16} />
            {:else}
              <Copy size={16} />
            {/if}
          </Button>
        </div>
      </div>
    </Tabs.Content>
  {/each}
</Tabs.Root>
