alter table "public"."branches"
  add constraint "branches_parent_branch_id_fkey"
  foreign key ("parent_branch_id")
  references "public"."branches"
  ("id") on update cascade on delete set null;
