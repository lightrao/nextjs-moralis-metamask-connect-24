# nextjs-moralis-metamask-connect-24

This is a minimalistic project to show us how we can connect to metamask using moralis in nextjs / react.

## Requirements

- git
- Nodejs & npm
- Yarn
- Metamask
- vscode

### Install git:

```bash
sudo apt install git-all
```

### Install nodejs & npm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install node
```

### Install yarn:

```bash
 npm install --global yarn
```

### Install vscode:

download and install the .deb package from the official Microsoft website, then run:

```bash
sudo apt install ./<file>.deb
```

## Creat next.js app

```bash
 yarn create next-app nextjs-moralis-metamask-connect-24
```

## Run next.js app

```bash
yarn dev
```

ctrl + c stop server.

## Install ethers.js

```bash
yarn add ethers@^5.7.2
```

or uninstall

```bash
yarn remove ethers
```

## Install dependency

```bash
yarn add moralis@^1.2.4
yarn add react-moralis@^1.2.1

yarn add magic-sdk@^8.0.1
yarn add @walletconnect/web3-provider@^1.7.1

yarn add moralis-v1

yarn add @walletconnect/ethereum-provider
yarn add @web3auth/web3auth
```

## Edit pages to realize project

I have deployed and approved SimpleStorage contract on sepolia for testing.

## Quickstart

Clone and install dependencies:

```bash
git clone https://github.com/lightrao/nextjs-moralis-metamask-connect-24.git
cd nextjs-moralis-metamask-connect-24
code .
yarn
```
