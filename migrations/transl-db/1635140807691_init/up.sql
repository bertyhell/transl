SET check_function_bodies = false;
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
    name text NOT NULL
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
ALTER TABLE ONLY public.languages
    ADD CONSTRAINT languages_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.project_language
    ADD CONSTRAINT project_language_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.project_terms
    ADD CONSTRAINT project_terms_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.project_language
    ADD CONSTRAINT project_language_language_id_fkey FOREIGN KEY (language_id) REFERENCES public.languages(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.project_language
    ADD CONSTRAINT project_language_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.project_terms
    ADD CONSTRAINT project_terms_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.translations
    ADD CONSTRAINT translations_key_id_fkey FOREIGN KEY (key_id) REFERENCES public.project_terms(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_project_id_fkey FOREIGN KEY (project_id) REFERENCES public.projects(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.user_project_link
    ADD CONSTRAINT user_project_link_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
