# quasar-users

## Dependencies

* [Docker](https://www.docker.com/products/docker-desktop)

## Setup

1. Clone this repository
2. In a terminal window, navigate to the cloned repository's location
3. Run `docker-compose build`
4. Run `docker-compose up -d`
5. In a web browser, navigate to `localhost:8080`

## Issues

When performing migrations with [Artisan](https://laravel.com/docs/migrations) (ex: `php artisan migrate`), you may need to fix the MySQL credentials located at `/backend/.env`.
