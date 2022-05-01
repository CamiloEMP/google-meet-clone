-- Create a table for Public Profiles
create table profiles (
  id uuid references auth.users not null,
  updated_at timestamp with time zone,
  name text,
  avatar text,
  username text unique,

  primary key (id),
  unique(username),
  constraint username_length check (char_length(username) >= 3)
);

alter table profiles
  enable row level security;

create policy "Los perfiles públicos son visibles por todos" on profiles
  for select using (true);

create policy "Las usuarios pueden insertar su propio perfil." on profiles
  for insert with check (auth.uid() = id);

create policy "Las usuarios pueden actualizar su propio perfil." on profiles
  for update using (auth.uid() = id);
