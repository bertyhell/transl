import { ReactComponent as Book } from './svg/book.svg';
import { ReactComponent as Briefcase } from './svg/briefcase.svg';
import { ReactComponent as Calendar } from './svg/calendar.svg';
import { ReactComponent as CaretDown } from './svg/caret-down.svg';
import { ReactComponent as CaretUp } from './svg/caret-up.svg';
import { ReactComponent as ChevronDown } from './svg/chevron-down.svg';
import { ReactComponent as ChevronLeft } from './svg/chevron-left.svg';
import { ReactComponent as ChevronRight } from './svg/chevron-right.svg';
import { ReactComponent as ChevronUp } from './svg/chevron-up.svg';
import { ReactComponent as ChevronsLeft } from './svg/chevrons-left.svg';
import { ReactComponent as ChevronsRight } from './svg/chevrons-right.svg';
import { ReactComponent as ChevronsUpAndDown } from './svg/chevrons-up-and-down.svg';
import { ReactComponent as Edit2 } from './svg/edit-2.svg';
import { ReactComponent as ErrorIcon } from './svg/error-icon.svg';
import { ReactComponent as Filter } from './svg/filter.svg';
import { ReactComponent as Folder } from './svg/folder.svg';
import { ReactComponent as Mic } from './svg/mic.svg';
import { ReactComponent as Search } from './svg/search.svg';
import { ReactComponent as X } from './svg/x.svg';

export const ICONS = {
  Book,
  Briefcase,
  Calendar,
  CaretDown,
  CaretUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUpAndDown,
  Edit2,
  ErrorIcon,
  Filter,
  Folder,
  Mic,
  Search,
  X,
};

export type IconName = keyof typeof ICONS;
