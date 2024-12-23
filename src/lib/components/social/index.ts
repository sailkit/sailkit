import Social from './Social.svelte';
import SocialElement from './SocialElement.svelte';

type SocialWithNested = typeof Social & { Element: typeof SocialElement };

(Social as SocialWithNested).Element = SocialElement;

export default Social as SocialWithNested;
