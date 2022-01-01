export interface NewTranslationEventBody {
  event: Event;
  created_at: string;
  id: string;
  delivery_info: DeliveryInfo;
  trigger: Trigger;
  table: Table;
}

export interface Event {
  session_variables: SessionVariables;
  op: string;
  data: Data;
  trace_context: TraceContext;
}

export interface SessionVariables {
  'x-hasura-role': string;
}

export interface Data {
  old: any;
  new: TranslationEvent;
}

type TranslationEventOperation =
  | 'add_branch'
  | 'merge_branch'
  | 'delete_branch'
  | 'add_term'
  | 'delete_term'
  | 'update_term'
  | 'add_translation'
  | 'update_translation'
  | 'delete_translation';

export interface TranslationEvent {
  operation: TranslationEventOperation;
  uuid: string;
  value: any;
  branch_id: number;
  term_id: any;
  date: string;
  id: number;
  language_id: any;
  project_id: number;
}

export interface TraceContext {
  trace_id: string;
  span_id: string;
}

export interface DeliveryInfo {
  max_retries: number;
  current_retry: number;
}

export interface Trigger {
  name: string;
}

export interface Table {
  schema: string;
  name: string;
}

export interface Header {
  value: string;
  name: string;
}
