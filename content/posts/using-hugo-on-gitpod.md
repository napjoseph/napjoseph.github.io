---
title: "Using Hugo on Gitpod"
date: 2020-07-31T13:15:13Z
tags:
  - hugo
  - gitpod
---

Create the necessary Gitpod files on the root of your repository.

```bash
$ touch .gitpod.Dockerfile
$ touch .gitpod.yml
```

```Dockerfile
# file: .gitpod.Dockerfile

FROM gitpod/workspace-full

USER root

RUN apt-get update && apt-get install -yq hugo
```

```yaml
# file: .gitpod.yml

image:
  file: .gitpod.Dockerfile

tasks:
  - command: 'hugo server --baseUrl $(gp url 1313) --appendPort=false'

ports:
  - port: 1313
    onOpen: open-preview
```

After commiting and merging your code, you can then go to `https://gitpod.io/#https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>` to start your Gitpod workspace.

Optionally, you can also add a Gitpod badge on your README file:

```markdown
<!-- file: README.md -->

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>)
```

#### Sources

Setup configuration was copied from [esttech/theia-dev-conf](https://github.com/esttech/theia-dev-conf/).