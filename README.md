[![Continuous integration](https://github.com/Jintus-live-projects/billard-training/actions/workflows/continuous-integration.yml/badge.svg)](https://github.com/Jintus-live-projects/billard-training/actions/workflows/continuous-integration.yml)

# Bienvenue sur le projet Billard Training

## Présentation et contexte

Je me présente Justin GALLY, connu sous le nom de Jintus sur [Twitch](https://www.twitch.tv/jintuslive) et [Twitter](https://www.twitter.com/jintuslive).

Je suis développeur WEB freelance sur Lyon et me suis lancé dans une aventure sur Twitch depuis peu. Mon but ? Partager à un maximum de personnes ma passion, le développement informatique, découvrir et m'améliorer en continue sur les technos WEB.

Dans cette optique, j'anime une émission où je développe des applications en direct.

Le projet Billard Training en fait partie.

## Stack technique

Le projet est basé sur le framework [RedwoodJS](https://redwoodjs.com)

> **Prérequis**
>
> - [Node.js](https://nodejs.org/en/) (16.17.x)
> - [Yarn](https://yarnpkg.com/) (>= 3.x)
> - [Docker](https://www.docker.com/)

## Installer le projet

> **Si vous n'êtes pas un viewer régulier**
>
> Il faut faire un fork du projet avant de faire les étapes suivantes.

Cloner le projet en local

```
git clone [git URL]
```

Se déplacer à la racine du projet, puis installer les dépendances externes :

```
cd billard-training
yarn install --immutable
```

Pour lancer le projet en local, lancer le container docker de la base de données et lancer l'application

```
docker compose up
yarn redwood dev
```

Le navigateur devrait se lancer sur http://localhost:8910 où on accède à l'application.

Le playground GraphQL est accesible à l'addresse suivante http://localhost:8911/graphql

## Contribution

Tout le monde peut proposer des pull requests qui seront relu en live sur [Twitch](https://www.twitch.tv/jintuslive).
Les pull requests devront être associées à une issue Github, existante ou nouvellement créée.

Si vous souhaitez être un collaborateur actif du projet et donc y accéder en tant que développeur, il faudra être un viewer régulier de la chaîne et participer aux émissions de façon active. Passer en live en discuter 

### Règle de contribution

Toute pull request doit :
- Passer le pipeline d'intégration continue avant d'être relu
- Être relu par moi ou un contributeur actif du projet

