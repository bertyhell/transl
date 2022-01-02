ALTER TABLE "public"."branches" ALTER COLUMN "date" TYPE timestamp;
alter table "public"."branches" rename column "date" to "created_at";
