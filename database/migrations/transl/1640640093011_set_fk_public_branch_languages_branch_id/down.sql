alter table "public"."branch_languages" drop constraint "branch_languages_branch_id_fkey",
  add constraint "project_languages_project_id_fkey"
  foreign key ("branch_id")
  references "public"."projects"
  ("id") on update cascade on delete cascade;
