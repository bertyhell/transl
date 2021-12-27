
alter table "public"."translations" drop constraint "translations_term_id_fkey",
  add constraint "translations_key_id_fkey"
  foreign key ("term_id")
  references "public"."project_terms"
  ("id") on update cascade on delete cascade;

alter table "public"."translations" rename column "term_id" to "key_id";

alter table "public"."project_terms" drop constraint "project_terms_branch_id_fkey",
  add constraint "project_terms_project_id_fkey"
  foreign key ("branch_id")
  references "public"."projects"
  ("id") on update cascade on delete cascade;

alter table "public"."project_terms" rename column "branch_id" to "project_id";

DROP TABLE "public"."branches";

alter table "public"."projects" drop constraint "projects_company_id_fkey";
