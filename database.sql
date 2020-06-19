CREATE TABLE public.places
(
    id integer NOT NULL,
    image character varying(255) COLLATE pg_catalog."default",
    name character varying(255) COLLATE pg_catalog."default",
    address character varying(255) COLLATE pg_catalog."default",
    address2 character varying(255) COLLATE pg_catalog."default",
    state character varying(100) COLLATE pg_catalog."default",
    city character varying(255) COLLATE pg_catalog."default",
    items character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT places_pkey PRIMARY KEY (id)
);

CREATE SEQUENCE places_id_seq;

ALTER TABLE places ALTER id SET DEFAULT NEXTVAL('places_id_seq');