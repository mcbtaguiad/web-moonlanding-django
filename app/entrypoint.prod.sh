#!/bin/sh

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi


# use_compression = true

python manage.py migrate --noinput
python manage.py collectstatic --no-input --clear



exec "$@"
