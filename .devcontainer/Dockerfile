# https://github.com/microsoft/vscode-dev-containers/blob/main/containers/javascript-node/.devcontainer/base.Dockerfile
ARG VARIANT=18-bullseye
FROM node:${VARIANT}

ENV DEBIAN_FRONTEND=noninteractive \
    TZ=Asia/Taipei

RUN apt-get update \
    && apt-get install -y --no-install-recommends apt-utils \
    && apt-get install -y build-essential tzdata nano git iputils-ping tmux curl \
    && apt-get install -y sudo \
    && rm -v /etc/localtime \
    && ln -svnf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone

# Install tslint, typescript. eslint is installed by javascript image
ARG NODE_MODULES="tslint-to-eslint-config typescript"
RUN npm install -g ${NODE_MODULES} \
    && npm cache clean --force > /dev/null 2>&1

# install code to install recommended extensions
RUN curl -fsSL -o code.deb "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64" \
    && apt install -y ./code.deb

# create user
RUN chown -R node:node /workspaces \
    && git config --global core.fileMode false
RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER node

