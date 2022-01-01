alter table "public"."translation_events" alter column "other_branch_id" drop not null;
alter table "public"."translation_events" add column "other_branch_id" int4;
