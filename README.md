# napjoseph.github.io

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/napjoseph/napjoseph.github.io)

The source code for [napjose.ph](https://napjose.ph). Generated using [Hugo](https://gohugo.io/).

## Branch set up

```bash
$ git branch
master                   # the branch that GitHub pages will serve the files from
stable                   # the main development branch where all pull requests will be merged to
YYYYMMDD_your_feature    # additional development branches for new features
```

## Local Development

1. Install [Hugo](https://gohugo.io/getting-started/installing/) on your machine.
2. File a [new issue](https://github.com/napjoseph/napjoseph.github.io/issues) for the feature you want to work on.
3. From the `stable` branch, create a new branch for your feature, (ideally) using `YYYYMMDD_your_feature` as the format.
4. Work on your feature.
5. Run `hugo server -D` to start the development server.
6. Once everything is good, push your commits and create a new pull request to `stable`.

## Gitpod Development

1. Install the [Gitpod browser extension](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki).
2. File a [new issue](https://github.com/napjoseph/napjoseph.github.io/issues) for the feature you want to work on.
3. Click the newly added `Gitpod` button on the issue you created.
4. Work on your feature.
5. Local hugo server should be running on the background. Otherwise, run `hugo server --baseUrl $(gp url 1313) --appendPort=false`.
6. Once everything is good, push your commits and create a new pull request to `stable`.

## License

MIT licensed. See bundled [file](./LICENSE.txt) for more details.
