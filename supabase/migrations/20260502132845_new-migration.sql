create table goals (
  id text primary key,
  user_id uuid references auth.users not null,
  name text,
  currency text,
  target numeric,
  deadline text,
  transactions jsonb,
  createdAt timestamp
);

-- Set up Row Level Security (RLS)
alter table goals enable row level security;

create policy "Users can view their own goals."
  on goals for select
  using ( auth.uid() = user_id );

create policy "Users can insert their own goals."
  on goals for insert
  with check ( auth.uid() = user_id );

create policy "Users can update their own goals."
  on goals for update
  using ( auth.uid() = user_id );

create policy "Users can delete their own goals."
  on goals for delete
  using ( auth.uid() = user_id );