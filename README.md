#  Customer Support ticketing system (Rails5 API and React Redux)

This application is simple Customer Support ticketing system..

- Client: React + Redux (start with create-react-app)
- Server: Rails5 API

## Implementation Flow
1. Add user API on Rails.
2. Add Request API on Rails5.
2. Add Application Client with React.
3. Convert from react to react-redux. (No api access)
4. Update client to access Web API.

## How to launch

### Go to application root folder and follow the following steps(configure server-side application).
1. bundle install `bundle install`  or ` bundle exec install` or `bundle`.
2. create `config/database.yml` from `database.yml.sample` and place your database credential.
3. create database using `rake db:create` or `rails db:create`.
4. run database migration `rails db:migrate` or `rake db:migrate`
4. run application server using `rails s -p 8000`.

```bash
$ cd eHelp
$ bundle install --path vendor/bundle
$ rails db:create
$ rails db:migrate
$ rails s -p 8000
=> Booting Puma
=> Rails 5.1.2 application starting in development on http://localhost:8000
=> Run `rails server -h` for more startup options
Puma starting in single mode...
```

### Configure client application
1. Open another console, go to client folder
2. install `npm` using `npm install`
3. run application using `npm start`

```bash
$ cd ./client
$ npm install
$ npm start
Compiled successfully!

The app is running at http://localhost:3000/
```

**notice** *For launching the two server, you should assign different port to each server.*
**notice** *client application will expect application is running on port 8000.*
**notice** *I am assuming you have nodejs setup on your machine.*
