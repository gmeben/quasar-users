# quasar-users

## Dependencies

* [Docker](https://www.docker.com/products/docker-desktop)

## Backend Setup

1. Clone this repository
2. In a terminal window, navigate to the cloned repository's location
3. Run `docker-compose build`
4. Run `docker-compose up -d`
5. In a web browser, navigate to `http://localhost:8080`

## Client Setup

1. In this cloned repository, navigate to the client directory `cd client`
2. Run `quasar dev`
3. The default web browser should automatically load `http://localhost:8081/#/`

## Issues

When performing migrations with [Artisan](https://laravel.com/docs/migrations) (ex: `php artisan migrate`), you may need to fix the MySQL credentials located at `/backend/.env`.
