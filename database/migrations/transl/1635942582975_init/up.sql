

SET check_function_bodies = false;
CREATE TABLE public.companies (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL
);
CREATE TABLE public.company_user_link (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    company_id uuid NOT NULL
);
CREATE TABLE public.languages (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    iso_code text NOT NULL,
    name text NOT NULL
);
CREATE TABLE public.project_language (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    project_id uuid NOT NULL,
    language_id uuid NOT NULL
);
CREATE TABLE public.project_terms (
    id uuid NOT NULL,
    key text NOT NULL,
    project_id uuid NOT NULL,
    description text
);
CREATE TABLE public.projects (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    company_id uuid NOT NULL
);
CREATE TABLE public.translation_statuses (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    project_id uuid NOT NULL
);
CREATE TABLE public.translations (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    key_id uuid NOT NULL,
    translation_value text,
    fuzzy boolean DEFAULT true NOT NULL
);
CREATE TABLE public.user_project_link (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    project_id uuid NOT NULL
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);
ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.company_user_link
    ADD CONSTRAINT company_user_link_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.project_language
    ADD CONSTRAINT project_language_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.project_terms
    ADD CONSTRAINT project_terms_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.translation_statuses
    ADD CONSTRAINT translation_statuses_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.company_user_link
    ADD CONSTRAINT company_user_link_company_id_fkey FOREIGN KEY (company_id) REFERENCES public.companies(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.company_user_link
    ADD CONSTRAINT company_user_link_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.project_language
    ADD CONSTRAINT project_language_language_id_fkey FOREIGN KEY (language_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.project_language
    ADD CONSTRAINT project_language_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.project_terms
    ADD CONSTRAINT project_terms_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.translation_statuses
    ADD CONSTRAINT translation_statuses_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_key_id_fkey FOREIGN KEY (key_id) REFERENCES public.project_terms(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

alter table "public"."company_user_link" alter column "id" set default gen_random_uuid();

alter table "public"."translations" drop column "fuzzy" cascade;

alter table "public"."translations" add column "language_id" uuid
 not null;

alter table "public"."translations" add column "status" uuid
 null;

alter table "public"."translations"
  add constraint "translations_language_id_fkey"
  foreign key ("language_id")
  references "public"."languages"
  ("id") on update cascade on delete cascade;

alter table "public"."translations"
  add constraint "translations_status_fkey"
  foreign key ("status")
  references "public"."translation_statuses"
  ("id") on update cascade on delete set null;

alter table "public"."translations" rename column "status" to "status_id";

alter table "public"."companies" rename column "id" to "uuid";

alter table "public"."companies" add column "id" serial
 not null unique;

alter table "public"."company_user_link" rename column "id" to "uuid";

alter table "public"."company_user_link" add column "id" serial
 not null unique;

BEGIN TRANSACTION;
ALTER TABLE "public"."company_user_link" DROP CONSTRAINT "company_user_link_pkey";

ALTER TABLE "public"."company_user_link"
    ADD CONSTRAINT "company_user_link_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;

alter table "public"."languages" rename column "id" to "uuid";

alter table "public"."languages" add column "id" serial
 not null unique;

alter table "public"."project_language" rename column "id" to "uuid";

alter table "public"."project_language" add column "id" serial
 not null unique;

alter table "public"."project_terms" rename column "id" to "uuid";

alter table "public"."project_terms" add column "id" serial
 not null unique;

alter table "public"."projects" rename column "id" to "uuid";

alter table "public"."projects" add column "id" serial
 not null unique;

alter table "public"."translation_statuses" rename column "id" to "uuid";

alter table "public"."translation_statuses" add column "id" serial
 not null unique;

alter table "public"."translations" rename column "id" to "uuid";

alter table "public"."translations" add column "id" serial
 not null unique;

alter table "public"."user_project_link" rename column "id" to "uuid";

alter table "public"."user_project_link" add column "id" serial
 not null unique;

alter table "public"."users" rename column "id" to "uuid";

alter table "public"."users" add column "id" serial
 not null unique;

BEGIN TRANSACTION;
ALTER TABLE "public"."project_language" DROP CONSTRAINT "project_language_pkey";

ALTER TABLE "public"."project_language"
    ADD CONSTRAINT "project_language_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;

BEGIN TRANSACTION;
ALTER TABLE "public"."translations" DROP CONSTRAINT "translations_pkey";

ALTER TABLE "public"."translations"
    ADD CONSTRAINT "translations_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;

BEGIN TRANSACTION;
ALTER TABLE "public"."user_project_link" DROP CONSTRAINT "user_project_link_pkey";

ALTER TABLE "public"."user_project_link"
    ADD CONSTRAINT "user_project_link_pkey" PRIMARY KEY ("id");
COMMIT TRANSACTION;

alter table "public"."user_project_link" drop constraint "user_project_link_project_id_fkey";

alter table "public"."user_project_link" drop constraint "user_project_link_user_id_fkey";

alter table "public"."translations" drop constraint "translations_key_id_fkey";

alter table "public"."translations" drop constraint "translations_status_fkey";

alter table "public"."translations" drop constraint "translations_language_id_fkey";

alter table "public"."translation_statuses" drop constraint "translation_statuses_project_id_fkey";

alter table "public"."project_terms" drop constraint "project_terms_project_id_fkey";

alter table "public"."project_language" drop constraint "project_language_language_id_fkey";

alter table "public"."project_language" drop constraint "project_language_project_id_fkey";

alter table "public"."company_user_link" drop constraint "company_user_link_user_id_fkey";

alter table "public"."company_user_link" drop constraint "company_user_link_company_id_fkey";

alter table "public"."company_user_link"
  add constraint "company_user_link_company_id_fkey"
  foreign key ("company_id")
  references "public"."companies"
  ("id") on update cascade on delete cascade;

alter table "public"."company_user_link"
  add constraint "company_user_link_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete cascade;

alter table "public"."project_language"
  add constraint "project_language_language_id_fkey"
  foreign key ("language_id")
  references "public"."languages"
  ("id") on update cascade on delete cascade;

alter table "public"."project_language"
  add constraint "project_language_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("id") on update cascade on delete cascade;

alter table "public"."project_terms"
  add constraint "project_terms_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("id") on update cascade on delete cascade;

alter table "public"."projects"
  add constraint "projects_company_id_fkey"
  foreign key ("company_id")
  references "public"."companies"
  ("id") on update cascade on delete cascade;

alter table "public"."translation_statuses"
  add constraint "translation_statuses_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("id") on update cascade on delete cascade;

alter table "public"."translations"
  add constraint "translations_language_id_fkey"
  foreign key ("language_id")
  references "public"."languages"
  ("id") on update cascade on delete cascade;

alter table "public"."translations"
  add constraint "translations_status_id_fkey"
  foreign key ("status_id")
  references "public"."translation_statuses"
  ("id") on update cascade on delete set null;

alter table "public"."user_project_link"
  add constraint "user_project_link_user_id_fkey"
  foreign key ("user_id")
  references "public"."users"
  ("id") on update cascade on delete cascade;

alter table "public"."user_project_link"
  add constraint "user_project_link_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("id") on update cascade on delete cascade;

alter table "public"."project_language" rename to "project_language_link";

alter table "public"."translations" rename column "key_id" to "term_id";

alter table "public"."translations"
  add constraint "translations_term_id_fkey"
  foreign key ("term_id")
  references "public"."project_terms"
  ("id") on update cascade on delete cascade;

alter table "public"."translations" rename column "language_id" to "project_language_link_id";
