-- create email table
CREATE TABLE public.email (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(255),
    "to" VARCHAR(255),
    "from" VARCHAR(255),
    date TIMESTAMP,
    timezone VARCHAR(50)
);

-- insert initial default emails
INSERT INTO public.email (subject, "to", "from", date, timezone)
    VALUES 
    ('Meeting', 'john@example.com', 'jane@example.com', '2023-11-23 10:00:00', 'GMT'),
    ('Project Update', 'jane@example.com', 'john@example.com', '2023-11-24 14:30:00', 'GMT'),
    ('Lunch?', 'john@example.com', 'jane@example.com', '2023-11-25 12:00:00', 'GMT');
