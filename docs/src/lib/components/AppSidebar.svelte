<script lang="ts" module>
  const data = {
    navMain: [
      {
        title: 'Getting Started',
        url: '',
        items: [
          {
            title: 'Installation',
            url: '/getting-started/installation'
          }
        ]
      },
      {
        title: 'Core',
        url: '',
        items: [
          {
            title: 'Render Email',
            url: '/core/render-email'
          },
          {
            title: 'Preview Email',
            url: '/core/preview-email'
          },
          {
            title: 'Theming',
            url: '/core/theming'
          }
        ]
      },
      {
        title: 'Components',
        url: '',
        items: [
          {
            title: 'Html',
            url: '/components/html'
          },
          {
            title: 'Head',
            url: '/components/head'
          },
          {
            title: 'Body',
            url: '/components/body'
          },
          {
            title: 'Section',
            url: '/components/section'
          },
          {
            title: 'Column',
            url: '/components/column'
          },
          {
            title: 'Text',
            url: '/components/text'
          },
          {
            title: 'Button',
            url: '/components/button'
          },
          {
            title: 'Image',
            url: '/components/image'
          },
          {
            title: 'Table',
            url: '/components/table'
          },
          {
            title: 'Social',
            url: '/components/social'
          },
          {
            title: 'Container',
            url: '/components/container'
          },
          {
            title: 'Raw',
            url: '/components/raw'
          }
        ]
      }
    ]
  };
</script>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import * as Collapsible from '$lib/components/ui/collapsible/index.js';
  import * as Sidebar from '$lib/components/ui/sidebar/index.js';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';
  import { useSidebar } from '$lib/components/ui/sidebar/index.js';
  import { getCurrent } from '$lib/utils/current.svelte';

  let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

  const sidebar = $derived({
    isMobile: useSidebar().isMobile,
    openMobile: useSidebar().openMobile,
    setOpenMobile: useSidebar().setOpenMobile
  });
</script>

<Sidebar.Root bind:ref {...restProps}>
  <Sidebar.Content class="gap-0">
    {#each data.navMain as group (group.title)}
      <Collapsible.Root title={group.title} open={true} class="group/collapsible">
        <Sidebar.Group>
          <Sidebar.GroupLabel
            class="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            {#snippet child({ props })}
              <Collapsible.Trigger {...props}>
                {group.title}
                <ChevronRight
                  class="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
                />
              </Collapsible.Trigger>
            {/snippet}
          </Sidebar.GroupLabel>
          <Collapsible.Content>
            <Sidebar.GroupContent>
              <Sidebar.Menu>
                {#each group.items as item (item.title)}
                  {@const isActive = getCurrent().doc === item.title}
                  <Sidebar.MenuItem>
                    <Sidebar.MenuButton
                      {isActive}
                      onclick={() => sidebar.isMobile && sidebar.setOpenMobile(false)}
                    >
                      {#snippet child({ props })}
                        <a href={item.url} {...props}>{item.title}</a>
                      {/snippet}
                    </Sidebar.MenuButton>
                  </Sidebar.MenuItem>
                {/each}
              </Sidebar.Menu>
            </Sidebar.GroupContent>
          </Collapsible.Content>
        </Sidebar.Group>
      </Collapsible.Root>
    {/each}
  </Sidebar.Content>
  <Sidebar.Rail />
</Sidebar.Root>
