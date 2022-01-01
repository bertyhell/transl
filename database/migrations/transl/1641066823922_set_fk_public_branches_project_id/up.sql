alter table "public"."branches"
  add constraint "branches_project_id_fkey"
  foreign key ("project_id")
  references "public"."projects"
  ("id") on update cascade on delete cascade;
