<script>
  // Stores
  import { page } from '$app/state';
  import { getCurrent } from '$lib/utils/current.svelte';
  import { dev } from '$app/environment';

  // Utils
  import { ModeWatcher, mode } from 'mode-watcher';

  // Components
  import SEO from '$components/SEO.svelte';
  import * as Sidebar from '$components/ui/sidebar';
  import Button from '$components/ui/button/button.svelte';
  import * as Breadcrumb from '$components/ui/breadcrumb';
  import { Separator } from '$components/ui/separator';
  import AppSidebar from '$components/AppSidebar.svelte';
  import { Toaster } from '$lib/components/ui/sonner';
  import ThemeSwitcher from '$components/ThemeSwitcher.svelte';
  import * as Tooltip from '$components/ui/tooltip';

  // Icons
  import { GithubLogo } from 'svelte-radix';

  // Styles
  import '../styles/app.css';

  let { children } = $props();
</script>

<svelte:head>
  {#if !dev}
    <script defer data-domain="sailkit.xyz" src="https://plausible.io/js/script.js"></script>
  {/if}
</svelte:head>

<SEO title={getCurrent().doc} url={page.url.toString()} />

<ModeWatcher />

<Toaster position="bottom-center" closeButton />

<Sidebar.Provider class="max-w-full">
  <AppSidebar />
  <Sidebar.Inset>
    <header class="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
      <Sidebar.Trigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Button variant="ghost" class="font-medium">
        <a href="/">⛵SailKit</a>
      </Button>
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Breadcrumb.Root>
        {#if getCurrent().category && getCurrent().doc}
          <Breadcrumb.List>
            <Breadcrumb.Item class="hidden md:block">
              <Breadcrumb.Link>{getCurrent().category}</Breadcrumb.Link>
            </Breadcrumb.Item>
            <Breadcrumb.Separator class="hidden md:block" />
            <Breadcrumb.Item class="hidden md:block">
              <Breadcrumb.Link>{getCurrent().doc}</Breadcrumb.Link>
            </Breadcrumb.Item>
          </Breadcrumb.List>
        {/if}
      </Breadcrumb.Root>
      {#if mode.current}
        <div class="flex flex-1 justify-end gap-2">
          <Button
            id="github"
            aria-label="github"
            variant="outline"
            size="icon"
            class="rounded-full"
          >
            <a href="https://github.com/n00ki/sailkit" target="_blank">
              <GithubLogo />
            </a>
          </Button>

          <ThemeSwitcher />
        </div>
      {/if}
    </header>

    <main class="flex-1 p-4 md:p-10">
      <div class="mx-auto w-full overflow-hidden">
        {@render children?.()}
      </div>
    </main>
  </Sidebar.Inset>
</Sidebar.Provider>
