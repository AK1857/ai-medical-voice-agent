ALTER TABLE "sessions_chat_table" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "sessions_chat_table" ADD COLUMN "createdBy" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "sessions_chat_table" ADD COLUMN "conversation" jsonb;--> statement-breakpoint
ALTER TABLE "sessions_chat_table" ADD CONSTRAINT "sessions_chat_table_createdBy_users_email_fk" FOREIGN KEY ("createdBy") REFERENCES "public"."users"("email") ON DELETE no action ON UPDATE no action;