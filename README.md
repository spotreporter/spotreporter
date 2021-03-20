# Spotreporter

![deploy-frontend](https://github.com/spotreporter/spotreporter/actions/workflows/deploy-frontend.yml/badge.svg)

## Development

Install dependencies:

```sh
yarn install
```

Start GUN relay:

```sh
docker run -p 8765:8765 gundb/gun
```

Start development server:

```sh
yarn start
```
