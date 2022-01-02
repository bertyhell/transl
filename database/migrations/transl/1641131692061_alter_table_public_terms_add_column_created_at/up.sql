alter table "public"."terms" add column "created_at" date
 not null default now();
