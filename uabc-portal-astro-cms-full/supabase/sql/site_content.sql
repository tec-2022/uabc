create table if not exists public.site_content(
  id text primary key,
  data jsonb not null default '{}'::jsonb
);
alter table public.site_content enable row level security;
create policy "read_site_content_public" on public.site_content for select using (true);
create policy "write_site_content_auth" on public.site_content for insert with check (auth.role() = 'authenticated');
create policy "update_site_content_auth" on public.site_content for update using (auth.role() = 'authenticated');
