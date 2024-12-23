import Column from './Column.svelte';
import Divider from './Divider.svelte';
import Spacer from './Spacer.svelte';

type ColumnWithNested = typeof Column & { Divider: typeof Divider; Spacer: typeof Spacer };

(Column as ColumnWithNested).Divider = Divider;
(Column as ColumnWithNested).Spacer = Spacer;

export default Column as ColumnWithNested;
