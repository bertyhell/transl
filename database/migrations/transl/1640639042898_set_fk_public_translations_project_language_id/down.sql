alter table "public"."translations" drop constraint "translations_project_language_id_fkey",
  add constraint "translations_language_id_fkey"
  foreign key ("project_language_id")
  references "public"."languages"
  ("id") on update cascade on delete cascade;
