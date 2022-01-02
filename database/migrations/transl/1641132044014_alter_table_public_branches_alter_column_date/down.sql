alter table "public"."branches" rename column "created_at" to "date";
ALTER TABLE "public"."branches" ALTER COLUMN "date" TYPE timestamp with time zone;
