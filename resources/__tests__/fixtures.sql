insert into provider (id, name, description, url)
values (1, 'provider 1', 'Cloud Provider 1', 'http://localhost:5000/api/v1');
insert into provider (id, name, description, url)
values (2, 'provider 2', 'Cloud Provider 2', 'http://localhost:5001/api/v1');
insert into provider (id, name, description, url)
values (3, 'provider 3', 'Cloud Provider 3 (unused)', 'http://localhost:4002/api/v1');

insert into plan (id, name, description, provider_id, cloud_image_id, cloud_flavour_id)
values (1, 'plan 1', 'Plan 1', 1, 1, 1);
insert into plan (id, name, description, provider_id, cloud_image_id, cloud_flavour_id)
values (2, 'plan 2', 'Plan 2', 1, 1, 2);
insert into plan (id, name, description, provider_id, cloud_image_id, cloud_flavour_id)
values (3, 'plan 3', 'Plan 3', 1, 2, 1);
insert into plan (id, name, description, provider_id, cloud_image_id, cloud_flavour_id)
values (4, 'plan 4', 'Plan 4', 1, 2, 2);
insert into plan (id, name, description, provider_id, cloud_image_id, cloud_flavour_id)
values (5, 'plan 5', 'Plan 5', 2, 1, 1);
insert into plan (id, name, description, provider_id, cloud_image_id, cloud_flavour_id)
values (6, 'plan 6', 'Plan 6', 2, 1, 2);
insert into plan (id, name, description, provider_id, cloud_image_id, cloud_flavour_id)
values (7, 'plan 7', 'Plan 7 (unused)', 2, 2, 1);

insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (1, 1, 1, '2020-01-01', '2020-01-01', false);
insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (2, 2, 2, '2020-01-01', '2020-01-01', false);
insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (3, 3, 3, '2020-01-01', '2020-01-01', false);
insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (4, 4, 4, '2020-01-01', '2020-01-01', false);
insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (5, 5, 1, '2020-01-01', '2020-01-01', false);
insert into instance  (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (6, 6, 2, '2020-01-01', '2020-01-01', false);
insert into instance(id, cloud_id, plan_id, created_at, updated_at, deleted)
values (7, 1, 5, '2020-01-01', '2020-01-01', false);
insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (8, 2, 6, '2020-01-01', '2020-01-01', false);
insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (9, 3, 5, '2020-01-01', '2020-01-01', false);

insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (10, 1, 1, '2020-01-01', '2020-01-01', true);
insert into instance (id, cloud_id, plan_id, created_at, updated_at, deleted)
values (11, 1, 5, '2020-01-01', '2020-01-01', true);

insert into users (id, email)
values (1, 'bloggs@example.com');
insert into users (id, email)
values (2, 'clayton@example.com');
insert into users (id, email)
values (3, 'tote@example.com');
insert into users (id, email)
values (4, 'zimmerman@example.com');
insert into users (id, email)
values (5, 'wilkinson@example.com');
insert into users (id, email)
values (6, 'clarkson@example.com');

insert INTO instance_member (id, user_id, instance_id, role, created_at)
values (1, 1, 1, 'OWNER', '2020-01-01');
insert INTO instance_member (id, user_id, instance_id, role, created_at)
values (2, 2, 1, 'USER', '2020-01-01');
insert INTO instance_member (id, user_id, instance_id, role, created_at)
values (3, 3, 1, 'GUEST', '2020-01-01');
insert INTO instance_member (id, user_id, instance_id, role, created_at)
values (4, 1, 2, 'USER', '2020-01-01');
insert INTO instance_member (id, user_id, instance_id, role, created_at)
values (5, 1, 3, 'OWNER', '2020-01-01');

insert into authorisation_token (id, token, instance_member_id, created_at)
values (1, '24e7437a-eae5-48c4-923e-778c42a6acf8', 1, 1577836800000);
insert into authorisation_token (id, token, instance_member_id, created_at)
values (2, '24e7437b-eae5-48c4-923e-778c42a6acf8', 2, 1577836800000);
