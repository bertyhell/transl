alter table "public"."branch_ancestors"
  add constraint "branch_ancestors_ancestor_child_branch_id_fkey"
  foreign key ("ancestor_child_branch_id")
  references "public"."branches"
  ("id") on update set null on delete set null;
