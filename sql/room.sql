create table videoroom (
  id uuid DEFAULT uuid_generate_v4(),
  name text,
  description text,
  shortid text,
  roomname text,
  meetingstart TIMESTAMP WITH TIME ZONE DEFAULT now(),

  roomactive boolean,
  userowner uuid references auth.users not null,
  orgowner uuid references public.organizations ,

  createdat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  primary key (id)
)

create table videoroomaccess (
  id uuid DEFAULT uuid_generate_v4(),
  room uuid references public.videoroom not null,
  userowner uuid references auth.users not null,
  userenable uuid references auth.users not null,

  createdat TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  primary key (id)
)
