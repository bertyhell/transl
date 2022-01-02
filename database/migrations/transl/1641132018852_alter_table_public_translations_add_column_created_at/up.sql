alter table "public"."translations" add column "created_at" timestamp
 not null default now();
