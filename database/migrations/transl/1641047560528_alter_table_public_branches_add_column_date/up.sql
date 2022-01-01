alter table "public"."branches" add column "date" timestamptz
 not null default now();
