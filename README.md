
# munify

Munify is a collection of tools to organize and run a [model united nations](https://en.wikipedia.org/wiki/Model_United_Nations) conference. It aims to simplify aspects like participant management, document organization commitee sessions and communication at the conference.

The project has been initiated by members of [DMUN](https://de.wikipedia.org/wiki/Deutsche_Model_United_Nations).

It is composed of multiple software components which can be found in their separate directories inside this monorepo.
## Components
See the existing components and their directory below

- [chase](./chase)
- [auth](./auth)


## Develop Locally
Make sure you have [Docker](https://www.docker.com/get-started/) and [Node.js](https://nodejs.org/en/download/current) installed

Clone the project

```bash
  git clone https://github.com/DeutscheModelUnitedNations/munify
```

Go to the project directory

```bash
  cd munify
```

Install dependencies via the custom install-all script

```bash
  npm run install-all
```

Start all components in dev mode

```bash
  npm run dev
```

Now every component is installed and running. Please see the specific components for details like running port etc. and how to get going.
You can find various other scripts at root level, e.g. for testing or linting, please see the scripts section in the [package.json](./package.json).
## FAQ

#### Can I use this for my conference outside of DMUN?

Yes. We encourage and allow usage for other conferences as long as it is non commercial. Please see our license for more detailed information on this.

#### Ok, but how?

You would need to deploy the app yourself, on your own servers and do all the neccessary setups. This can be an owerwhelming task so feel free to contact us when you need help. In some cases it might be possible for us to run the infrastructure and grant you access, please contact us in case you would like to know more about this.

#### Can I help you building the project?

Yes, you can! Please refer to the contributing section below.

#### Can you add a feature?

For feature suggestions, please post in the discussion section of this repository. You can find it [here](https://github.com/DeutscheModelUnitedNations/munify/discussions). If you want to write it yourself, please see the contributing section.
## Contributing

Contributions are always welcome!

See [CONTRIBUTING.md](./CONTRIBUTING.md) for ways to get started.

By contributing you agree to release your contributtion under the projects license.
## License

*This aspect is work in progress since the project is currently in its development phase. If you want to use the project or one of its components nonetheless, please contact us via the discussion section.*

[LICENSE](./LICENSE.md)
