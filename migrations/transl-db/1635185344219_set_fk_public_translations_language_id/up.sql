alter table "public"."translations"
  add constraint "translations_language_id_fkey"
  foreign key ("language_id")
  references "public"."languages"
  ("id") on update cascade on delete cascade;
