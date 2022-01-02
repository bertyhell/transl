alter table "public"."branches"
  add constraint "branches_parent_branch_id_fkey"
  foreign key (parent_branch_id)
  references "public"."branches"
  (id) on update cascade on delete set null;
alter table "public"."branches" alter column "parent_branch_id" drop not null;
alter table "public"."branches" add column "parent_branch_id" int4;
