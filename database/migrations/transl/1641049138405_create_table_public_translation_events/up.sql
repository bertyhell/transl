CREATE TABLE "public"."translation_events" ("id" serial NOT NULL, "uuid" uuid NOT NULL DEFAULT gen_random_uuid(), PRIMARY KEY ("id") , UNIQUE ("uuid"), UNIQUE ("id"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
