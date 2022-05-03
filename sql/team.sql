-- Propuesta para organizaciones
create table organizations (
  uid uuid not null,
  name text,
  owner uuid references auth.users not null,

  primary key (uid),
  unique(uid)
)

-- Propuesta para los integrantes de la organizacion
create table member (
  uid uuid not null,
  userId uuid references auth.users not null,
  org uuid references public.organizations not null,

  primary key (uid),
  unique(uid)
)
