# Use an official Python runtime as a parent image
FROM python:3.10
LABEL authors="vvardanyan"

RUN apt-get update && apt-get install -y netcat-openbsd

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /code

# Install dependencies
COPY Pipfile Pipfile.lock /code/
RUN pip install pipenv && pipenv install --system

# Copy project
COPY . /code/

# Set entrypoint
ENTRYPOINT ["/code/entrypoint.sh"]
