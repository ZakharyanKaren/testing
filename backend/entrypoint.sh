#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z $POSTGRES_HOST $POSTGRES_PORT; do
  sleep 0.1
done

echo "PostgreSQL started"

echo "Running migrate..."
python src/manage.py migrate

echo "Collecting Static files..."
python src/manage.py collectstatic --no-input

echo "Creating superuser..."
python src/manage.py createsuperuser --email=admin@admin.com --noinput
echo "Superuser created!"

# Check if DEBUG is True, and use Django's runserver if it is
if [ "$DEBUG" = "True" ]; then
    echo "Starting Django's runserver..."
    exec python src/manage.py runserver 0.0.0.0:8000
else
    echo "Starting Gunicorn..."
    exec /bin/sh -c "cd src/ && gunicorn --bind 0.0.0.0:8000 icranet.wsgi"
fi