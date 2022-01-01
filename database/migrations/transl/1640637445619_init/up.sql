
SET check_function_bodies = false;
CREATE TABLE public.branches (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    project_id integer NOT NULL,
    name text NOT NULL
);

CREATE SEQUENCE public.branches_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.branches_id_seq OWNED BY public.branches.id;
CREATE TABLE public.companies (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.companies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.companies_id_seq OWNED BY public.companies.id;
CREATE TABLE public.company_user_link (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id integer NOT NULL,
    company_id integer NOT NULL
);
CREATE SEQUENCE public.company_user_link_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.company_user_link_id_seq OWNED BY public.company_user_link.id;
CREATE TABLE public.languages (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    iso_code text NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.languages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.languages_id_seq OWNED BY public.languages.id;
CREATE TABLE public.project_language (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    project_id integer NOT NULL,
    language_id integer NOT NULL
);
CREATE SEQUENCE public.project_language_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.project_language_id_seq OWNED BY public.project_language.id;
CREATE TABLE public.project_terms (
    id integer NOT NULL,
    uuid uuid NOT NULL,
    key text NOT NULL,
    project_id integer NOT NULL,
    description text
);
CREATE SEQUENCE public.project_terms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.project_terms_id_seq OWNED BY public.project_terms.id;
CREATE TABLE public.projects (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    company_id integer NOT NULL
);
CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;
CREATE TABLE public.translation_statuses (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL,
    project_id integer NOT NULL
);
CREATE SEQUENCE public.translation_statuses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.translation_statuses_id_seq OWNED BY public.translation_statuses.id;
CREATE TABLE public.translations (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    key_id integer NOT NULL,
    translation_value text,
    language_id integer NOT NULL,
    status_id integer
);
CREATE SEQUENCE public.translations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.translations_id_seq OWNED BY public.translations.id;
CREATE TABLE public.user_project_link (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    user_id integer NOT NULL,
    project_id integer NOT NULL
);
CREATE SEQUENCE public.user_project_link_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_project_link_id_seq OWNED BY public.user_project_link.id;
CREATE TABLE public.users (
    id integer NOT NULL,
    uuid uuid DEFAULT public.gen_random_uuid() NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);
CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
ALTER TABLE ONLY public.branches ALTER COLUMN id SET DEFAULT nextval('public.branches_id_seq'::regclass);
ALTER TABLE ONLY public.companies ALTER COLUMN id SET DEFAULT nextval('public.companies_id_seq'::regclass);
ALTER TABLE ONLY public.company_user_link ALTER COLUMN id SET DEFAULT nextval('public.company_user_link_id_seq'::regclass);
ALTER TABLE ONLY public.languages ALTER COLUMN id SET DEFAULT nextval('public.languages_id_seq'::regclass);
ALTER TABLE ONLY public.project_language ALTER COLUMN id SET DEFAULT nextval('public.project_language_id_seq'::regclass);
ALTER TABLE ONLY public.project_terms ALTER COLUMN id SET DEFAULT nextval('public.project_terms_id_seq'::regclass);
ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);
ALTER TABLE ONLY public.translation_statuses ALTER COLUMN id SET DEFAULT nextval('public.translation_statuses_id_seq'::regclass);
ALTER TABLE ONLY public.translations ALTER COLUMN id SET DEFAULT nextval('public.translations_id_seq'::regclass);
ALTER TABLE ONLY public.user_project_link ALTER COLUMN id SET DEFAULT nextval('public.user_project_link_id_seq'::regclass);
ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.branches
    ADD CONSTRAINT branches_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.company_user_link
    ADD CONSTRAINT companies_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.companies
    ADD CONSTRAINT company_user_link_id_key UNIQUE (id);
ALTER TABLE ONLY public.company_user_link
    ADD CONSTRAINT company_user_link_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_id_key UNIQUE (id);
ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.project_language
    ADD CONSTRAINT project_language_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.project_language
    ADD CONSTRAINT project_language_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.project_terms
    ADD CONSTRAINT project_terms_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.project_terms
    ADD CONSTRAINT project_terms_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.translation_statuses
    ADD CONSTRAINT translation_statuses_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.translation_statuses
    ADD CONSTRAINT translation_statuses_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_uuid_key UNIQUE (uuid);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_uuid_key UNIQUE (uuid);
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
ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_language_id_fkey FOREIGN KEY (language_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_status_fkey FOREIGN KEY (status_id) REFERENCES public.translation_statuses(id) ON UPDATE CASCADE ON DELETE SET NULL;
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;

alter table "public"."projects"
  add constraint "projects_company_id_fkey"
  foreign key ("company_id")
  references "public"."companies"
  ("id") on update cascade on delete cascade;

alter table "public"."project_terms" rename column "project_id" to "branch_id";

alter table "public"."project_terms" drop constraint "project_terms_project_id_fkey",
  add constraint "project_terms_branch_id_fkey"
  foreign key ("branch_id")
  references "public"."branches"
  ("id") on update cascade on delete cascade;

alter table "public"."translations" rename column "key_id" to "term_id";

alter table "public"."translations" drop constraint "translations_key_id_fkey",
  add constraint "translations_term_id_fkey"
  foreign key ("term_id")
  references "public"."project_terms"
  ("id") on update cascade on delete cascade;
