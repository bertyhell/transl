

alter table "public"."translations" rename column "project_language_link_id" to "language_id";

alter table "public"."translations" drop constraint "translations_term_id_fkey";

alter table "public"."translations" rename column "term_id" to "key_id";

alter table "public"."project_language_link" rename to "project_language";

alter table "public"."user_project_link" drop constraint "user_project_link_project_id_fkey";

alter table "public"."user_project_link" drop constraint "user_project_link_user_id_fkey";

alter table "public"."translations" drop constraint "translations_status_id_fkey";

alter table "public"."translations" drop constraint "translations_language_id_fkey";

alter table "public"."translation_statuses" drop constraint "translation_statuses_project_id_fkey";

alter table "public"."projects" drop constraint "projects_company_id_fkey";

alter table "public"."project_terms" drop constraint "project_terms_project_id_fkey";

alter table "public"."project_language" drop constraint "project_language_project_id_fkey";

alter table "public"."project_language" drop constraint "project_language_language_id_fkey";

alter table "public"."company_user_link" drop constraint "company_user_link_user_id_fkey";

alter table "public"."company_user_link" drop constraint "company_user_link_company_id_fkey";

alter table "public"."company_user_link"
  add constraint "company_user_link_company_id_fkey"
  foreign key ("company_id")
  references "public"."companies"
  ("uuid") on update cascade on delete cascade;

alter table "public"."company_user_link"
  add constraint "company_user_link_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("uuid") on update cascade on delete cascade;

alter table "public"."project_language"
  add constraint "project_language_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("uuid") on update cascade on delete cascade;

alter table "public"."project_language"
  add constraint "project_language_language_id_fkey"
  foreign key ("language_id")
  references "public"."languages"
  ("uuid") on update cascade on delete cascade;

alter table "public"."project_terms"
  add constraint "project_terms_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("uuid") on update cascade on delete cascade;

alter table "public"."translation_statuses"
  add constraint "translation_statuses_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("uuid") on update cascade on delete cascade;

alter table "public"."translations"
  add constraint "translations_language_id_fkey"
  foreign key ("language_id")
  references "public"."languages"
  ("uuid") on update cascade on delete cascade;

alter table "public"."translations"
  add constraint "translations_status_fkey"
  foreign key ("status_id")
  references "public"."translation_statuses"
  ("uuid") on update cascade on delete set null;

alter table "public"."translations"
  add constraint "translations_key_id_fkey"
  foreign key ("key_id")
  references "public"."project_terms"
  ("uuid") on update cascade on delete cascade;

alter table "public"."user_project_link"
  add constraint "user_project_link_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("uuid") on update cascade on delete cascade;

alter table "public"."user_project_link"
  add constraint "user_project_link_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("uuid") on update cascade on delete cascade;

alter table "public"."user_project_link" drop constraint "user_project_link_pkey";
alter table "public"."user_project_link"
    add constraint "user_project_link_pkey"
    primary key ("uuid");

alter table "public"."translations" drop constraint "translations_pkey";
alter table "public"."translations"
    add constraint "translations_pkey"
    primary key ("uuid");

alter table "public"."project_language" drop constraint "project_language_pkey";
alter table "public"."project_language"
    add constraint "project_language_pkey"
    primary key ("uuid");

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."users" add column "id" serial
--  not null unique;

alter table "public"."users" rename column "uuid" to "id";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."user_project_link" add column "id" serial
--  not null unique;

alter table "public"."user_project_link" rename column "uuid" to "id";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."translations" add column "id" serial
--  not null unique;

alter table "public"."translations" rename column "uuid" to "id";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."translation_statuses" add column "id" serial
--  not null unique;

alter table "public"."translation_statuses" rename column "uuid" to "id";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."projects" add column "id" serial
--  not null unique;

alter table "public"."projects" rename column "uuid" to "id";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."project_terms" add column "id" serial
--  not null unique;

alter table "public"."project_terms" rename column "uuid" to "id";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."project_language" add column "id" serial
--  not null unique;

alter table "public"."project_language" rename column "uuid" to "id";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."languages" add column "id" serial
--  not null unique;

alter table "public"."languages" rename column "uuid" to "id";

alter table "public"."company_user_link" drop constraint "company_user_link_pkey";
alter table "public"."company_user_link"
    add constraint "company_user_link_pkey"
    primary key ("uuid");

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."company_user_link" add column "id" serial
--  not null unique;

alter table "public"."company_user_link" rename column "uuid" to "id";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."companies" add column "id" serial
--  not null unique;

alter table "public"."companies" rename column "uuid" to "id";

alter table "public"."translations" rename column "status_id" to "status";

alter table "public"."translations" drop constraint "translations_status_fkey";

alter table "public"."translations" drop constraint "translations_language_id_fkey";

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."translations" add column "status" uuid
--  null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."translations" add column "language_id" uuid
--  not null;

alter table "public"."translations" alter column "fuzzy" set default true;
alter table "public"."translations" alter column "fuzzy" drop not null;
alter table "public"."translations" add column "fuzzy" bool;

ALTER TABLE "public"."company_user_link" ALTER COLUMN "id" drop default;
