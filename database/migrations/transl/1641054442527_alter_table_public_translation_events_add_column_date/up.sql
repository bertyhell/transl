alter table "public"."translation_events" add column "date" timestamptz
 not null default now();
