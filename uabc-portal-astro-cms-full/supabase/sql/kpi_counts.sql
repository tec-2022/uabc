create or replace function public.kpi_counts()
returns table (pubs integer, events integer, users integer)
language sql stable security definer set search_path=public as $$
  select
    (select count(*) from public.publications) as pubs,
    (select count(*) from public.events)       as events,
    (select count(*) from public.profiles)     as users;
$$;
grant execute on function public.kpi_counts() to anon, authenticated;
