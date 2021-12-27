alter table "public"."branch_languages" drop constraint "project_languages_project_id_fkey",
  add constraint "branch_languages_branch_id_fkey"
  foreign key ("branch_id")
  references "public"."branches"
  ("id") on update cascade on delete cascade;
