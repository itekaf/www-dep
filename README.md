# linterhub

## Getting started

Update submodule(s):
```bash
$ git submodule init
$ git submodule update
```
## Development

Nothing special, all sources are inside `src` folder.

## Deployment

Install npm packages:
```bash
$ npm install
```

Build the page and copy all static files to `build` folder:
```bash
$ npm run-script build
```

That's it! Open `build/index.html` in browser to preview before deployment.
The page itself is automatically build & deployed after any change in `master` branch.

## More

If you're interested how it built and works - more details in [INFO](INFO.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.