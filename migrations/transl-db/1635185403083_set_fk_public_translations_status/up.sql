alter table "public"."translations"
  add constraint "translations_status_fkey"
  foreign key ("status")
  references "public"."translation_statuses"
  ("id") on update cascade on delete set null;
