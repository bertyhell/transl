alter table "public"."translations" alter column "fuzzy" set default true;
alter table "public"."translations" alter column "fuzzy" drop not null;
alter table "public"."translations" add column "fuzzy" bool;
