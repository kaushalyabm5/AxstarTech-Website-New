-- ============================================================
-- AXSTAR Admin Dashboard — Supabase Schema
-- Run this in your Supabase project > SQL Editor
-- ============================================================

-- 1. Portfolio Items Table
create table if not exists portfolio_items (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  title text not null,
  description text,
  thumbnail_url text,
  image_urls jsonb default '[]',
  requirements jsonb default '[]',
  client_country text,
  industry text,
  duration text,
  project_type text,
  tech_stack jsonb default '[]',
  status text default 'Completed',
  project_success_rate text,
  delivery_time text,
  client_name text,
  client_img text,
  website_link text,
  is_latest_project boolean default false,
  latest_project_order integer,
  created_at timestamptz default now()
);

-- Migration: add latest project fields if table already exists
alter table portfolio_items
  add column if not exists is_latest_project boolean default false,
  add column if not exists latest_project_order integer;

-- Migration: add visibility field for private/public portfolio filtering
alter table portfolio_items
  add column if not exists visibility text default 'public'
    check (visibility in ('public', 'private'));

-- Set all existing rows to 'public' so the current public website does not break
update portfolio_items set visibility = 'public' where visibility is null;

alter table portfolio_items enable row level security;

-- Public can read portfolio items (for the frontend)
create policy "Public read portfolio items"
  on portfolio_items for select
  using (true);

-- Only authenticated admins can insert/update/delete
create policy "Authenticated manage portfolio items"
  on portfolio_items for all
  using (auth.role() = 'authenticated');


-- 2. Career Applications Table
create table if not exists career_applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  position text not null,
  cover_letter text,
  cv_url text,
  created_at timestamptz default now()
);

alter table career_applications enable row level security;

-- Anyone can submit an application (public form)
create policy "Anyone can submit application"
  on career_applications for insert
  with check (true);

-- Only authenticated admins can view applications
create policy "Authenticated read career applications"
  on career_applications for select
  using (auth.role() = 'authenticated');

-- Only authenticated admins can delete applications
create policy "Authenticated delete career applications"
  on career_applications for delete
  using (auth.role() = 'authenticated');


-- ============================================================
-- Storage Buckets
-- Run these or create buckets manually in Storage > New Bucket
-- ============================================================

-- Portfolio images — public bucket
insert into storage.buckets (id, name, public)
values ('portfolio-images', 'portfolio-images', true)
on conflict (id) do nothing;

create policy "Public read portfolio images"
  on storage.objects for select
  using (bucket_id = 'portfolio-images');

create policy "Authenticated upload portfolio images"
  on storage.objects for insert
  with check (bucket_id = 'portfolio-images' and auth.role() = 'authenticated');

create policy "Authenticated delete portfolio images"
  on storage.objects for delete
  using (bucket_id = 'portfolio-images' and auth.role() = 'authenticated');

-- Career CVs — public bucket (UUIDs in paths make them non-guessable)
insert into storage.buckets (id, name, public)
values ('career-cvs', 'career-cvs', true)
on conflict (id) do nothing;

create policy "Public read career cvs"
  on storage.objects for select
  using (bucket_id = 'career-cvs');

create policy "Anyone upload career cvs"
  on storage.objects for insert
  with check (bucket_id = 'career-cvs');

create policy "Authenticated delete career cvs"
  on storage.objects for delete
  using (bucket_id = 'career-cvs' and auth.role() = 'authenticated');
