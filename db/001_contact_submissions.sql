create table if not exists contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name varchar(120) not null,
  work_email varchar(254) not null,
  company varchar(160),
  phone varchar(40),
  inquiry_type varchar(32) not null,
  message text not null,
  status varchar(16) not null default 'NEW',
  ip_hash varchar(128),
  user_agent varchar(512),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists contact_submissions_created_at_idx on contact_submissions (created_at);
create index if not exists contact_submissions_status_idx on contact_submissions (status);
