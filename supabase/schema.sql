-- Run this file in the Supabase SQL Editor for this portfolio project.

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 2 and 120),
  company text not null check (char_length(company) between 2 and 120),
  location text not null,
  employment_type text not null check (employment_type in ('Full-time', 'Part-time', 'Contract', 'Internship')),
  description text,
  application_url text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.saved_jobs (
  user_id uuid not null references auth.users(id) on delete cascade,
  job_id uuid not null references public.jobs(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, job_id)
);

create index if not exists jobs_active_created_at_idx
  on public.jobs (is_active, created_at desc);

create index if not exists saved_jobs_user_id_idx
  on public.saved_jobs (user_id);

-- Keep updated_at accurate whenever a job is edited.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists jobs_set_updated_at on public.jobs;
create trigger jobs_set_updated_at
before update on public.jobs
for each row execute procedure public.set_updated_at();

alter table public.jobs enable row level security;
alter table public.saved_jobs enable row level security;

-- Visitors can browse active roles. Only a server-side service role should create or edit jobs.
drop policy if exists "Active jobs are publicly readable" on public.jobs;
create policy "Active jobs are publicly readable"
on public.jobs for select
using (is_active = true);

-- Signed-in users can only read and change their own saved roles.
drop policy if exists "Users can view their saved jobs" on public.saved_jobs;
create policy "Users can view their saved jobs"
on public.saved_jobs for select to authenticated
using (auth.uid() = user_id);

drop policy if exists "Users can save jobs for themselves" on public.saved_jobs;
create policy "Users can save jobs for themselves"
on public.saved_jobs for insert to authenticated
with check (auth.uid() = user_id);

drop policy if exists "Users can remove their saved jobs" on public.saved_jobs;
create policy "Users can remove their saved jobs"
on public.saved_jobs for delete to authenticated
using (auth.uid() = user_id);

-- Starter data for the Job Finder project. These can be replaced from the Supabase dashboard.
insert into public.jobs (title, company, location, employment_type, description, application_url)
values
  ('Frontend Developer', 'Nova Labs', 'Remote', 'Full-time', 'Build accessible React interfaces for a growing product team.', 'https://example.com/jobs/frontend-developer'),
  ('React Developer', 'Bright Studio', 'Harare', 'Contract', 'Create polished web experiences with a creative digital studio.', 'https://example.com/jobs/react-developer'),
  ('Junior Software Engineer', 'Buildable', 'Remote', 'Full-time', 'Learn and contribute across modern web applications.', 'https://example.com/jobs/junior-engineer')
on conflict do nothing;
