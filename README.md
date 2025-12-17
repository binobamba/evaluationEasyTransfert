<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" />
  </a>
</p>

<h1 align="center">API de Gestion Financière</h1>

---

## Description

API REST développée avec NestJS pour la gestion des utilisateurs et des transactions financières.
L’application utilise PostgreSQL comme base de données et suit une architecture modulaire.

---

## Prérequis

Avant de commencer, assurez-vous d’avoir installé :

* Node.js (version 20 ou supérieure)
* PostgreSQL (version 15 ou supérieure recommandée)
* npm

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/binobamba/evaluationEasyTransfert.git
cd evaluationEasyTransfert
```

---

### 2. Créer la base de données

Dans PostgreSQL, créer une base de données nommée :

```sql
CREATE DATABASE evaluation;
```

---

### 3. Configuration des variables d’environnement

Créer un fichier `.env` à la racine du projet et y ajouter :

```env
# Application
NODE_ENV=development
PORT=4000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=evaluation
DB_USERNAME=postgres
DB_PASSWORD=password

# API Keys
API_KEY=ZAERTTTTTTTEZAYIGYFEZBYFGEIUEVYEYRGVNYCERYYYYYFGNIRCUIRNFYYYYZCOUERCZFIGOOOOOOOOURIERRRRRRRRRRRRRO
API_SECRET=EHFAUNGUAZEGICUZUYEAHRIHGTUCHZ45UH8EIRCGZJ894J8IJXI459ZXIX58954IUN4895HUH7TH2UHTP



Note : ne jamais exposer ces valeurs en environnement de production.

---

### 4. Installation des dépendances

```bash
npm install
```

---

### 5. Lancement de l’application

```bash
npm run start:dev
```

L’API est accessible à l’adresse suivante :

```
http://localhost:4000
```

---

## Documentation API

La documentation Swagger est disponible à l’adresse :

```
http://localhost:4000/api
```

---

## Technologies utilisées

| Technologie     | Description                   |
| --------------- | ----------------------------- |
| NestJS          | Framework backend Node.js     |
| TypeORM         | ORM pour PostgreSQL           |
| PostgreSQL      | Base de données relationnelle |
| Swagger         | Documentation API             |
| class-validator | Validation des DTO            |

---

## Auteur

Bamba Fulgence
Projet d’évaluation – API NestJS
