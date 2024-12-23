import Section from './Section.svelte';
import Group from './Group.svelte';

type SectionWithNested = typeof Section & { Group: typeof Group };

(Section as SectionWithNested).Group = Group;

export default Section as SectionWithNested;
