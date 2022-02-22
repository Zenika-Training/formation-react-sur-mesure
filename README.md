# Formation React sur mesure

## Déroulé du cours

Le déroulé du cours se trouve dans le PDF `Slides&TPs`.
La version modifiable se trouve dans le pptx du même nom.

### Programme

Cette version de React sur mesure suit le programme suivant:

- Rappel sur JS et React (1h)
  - Le cycle de vie des composants React
  - Les syntaxes JS modernes
  - Rappel de programmation fonctionnel
- Hooks React (1h)
  - Les hooks principaux (useState, useEffect)
  - Les hooks avancé (useRef, useReducer)
  - L'optimisation des hooks (useMemo, useCallback)
- React Router V6 (1/2h)
  - Les nouveauté de la nouvelle version
- React & TypeScript (1/2h)
  - Les different type pour React
- Stockage d'état léger (2h)
  - React Context
  - Bibliothèque Zustand
- Gestion des formulaires (2h)
  - Presentation des principales solution du marché
  - La bibliothèque React Hook Form

## Travaux pratiques

Les travaux pratiques qui accompagnent cette formation s'enchainent pour couvrir les différents points évoqués. Pour cela nous allons construire une ToDo list multiple qui va suivre la progression de la formation.

Chaque étape est identifié par un tag dédié qu'il suffira de checkout pour y accéder. A chaque nouvelle étape, un corrigé de l'étape précédente sera proposé dans un répertoire dédié.

Le participant est invité à réalisé les exercices dans le répertoire `exercices`, les corrections seront disponible dans les répertoires `tp-0n` ou n est le numéro de l'étape.

Dernier point important, ces travaux pratiques n'aborde pas la question de la persistance de la ToDo list, que ce soit localement ou a distance. Pour un exemple qui prend en compte cette dimension, aller voir le dépôt [Context vs. Redux](https://github.com/Zenika/react-context-vs-redux).

## TP 0: Set up

Il s'agit du set up initial.

```sh
git checkout TP-00
cd exercices
npm install
npm start
```

A noté que nous n'abordons pas la question des styles. Ainsi, nous proposons d'utiliser le framework Bulma et ses classes utilitaire (installé par défaut). La documentation complète est disponible ici: https://bulma.io/documentation/

Cependant, si vous êtes familier avec un autre framework CSS, n'hésitez pas à l'utiliser à la place.

Pour info, l'application a été initialisé avec `react-create-app` et réduit au strict minimal. L'objectif est de ne pas toucher au fichier `index.js`

## TP 1: Création des composants de base avec les Hooks React

```sh
git checkout TP-01
```

L'objectif est de créer les composants suivant:

- `ToDoApp`: La racine de notre application
- `ToDoForm`: Le formulaire pour ajouter une nouvelle tache à n'importe quelle liste (même une liste qui n'existe pas encore).
- `ToDoNav`: Le menu qui permet de passer d'un liste à une autre
- `ToDoList`: La liste des taches pour une liste donnée
- `ToDoItem`: La représentation d'une tache à faire

Le fonctionnement de la ToDo list sera basé sur un simple uplifting du state dans `ToDoApp`

Pour chacun des composant vous devez suivre un certain nombre de pré-requis:

 - `ToDoApp` doit systématiquement afficher un titre, le formulaire d'ajout, le menu de navigation entre les listes.
   - Si on est sur la vue d'accueil on affichera toutes les taches de toutes les listes.
   - Si une liste a été sélectionnée dans la navigation, on doit afficher un sous-titre qui reprend le nom de la liste courante et uniquement les tache de la liste sélectionné. En plus on doit pouvoir cliquer sur le titre principal pour retourner sur la vue d'accueil
 - `ToDoForm` doit être un formulaire qui comprend:
   - un champ de text libre pour saisir l'intitulé de la nouvelle tache;
   - un champ de text libre pour saisir le nom de la liste associé à la tache (_bonus, si vous avez le temps, utilisez l'élément HTML [`<datalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) pour proposer l'autocompletion des noms de liste existant_)
   - un bouton pour valider le formulaire
 - `ToDoNav` doit être une liste de lien qui permet de choisir la liste à afficher. La liste doit en plus contenir un lien qui permet de revenir à la vue d'accueil
 - `ToDoItem` doit afficher l'intitulé de la tache, une case à coché qui permet de marqué la tache comme "faite", un bouton pour supprimé la tache.
 - `ToDoList` doit afficher toute les taches qui lui sont passé

# TP-2: Ajouter des routes

```sh
git checkout TP-02
```

Pour que notre ToDo list puisse mieux refléter l'état affiché nous allons utiliser React Router V6 pour associer des routes à nos diverses listes.

Pour cela il va falloir:

- Choisir un Router (BrowserRouter ou HashRouter) et l'initialiser dans `ToDoApp`
- Définir les routes suivantes : `/` et `/:listId`
- Utiliser `<Link>` pour gérer les différents liens qu'on à pu créer précédemment
- S'assurer qu'un changement d'URL se reflète bien dans l'affichage de nos ToDo lists.

# TP-3: Gérer l'état partagé de l'application

```sh
git checkout TP-03
```

Dans cet exercice nous allons remplacé l'uplifting de state par l'usage d'un store d'état partagé. Suite à ce que nous avons vu dans la formation vous pouvez indifféremment utiliser les Context de React ou la bibliothèque zustand.

Le corrigé de l'exercice utilisera zustand, si vous voulez voir un équivalent avec les Context, vous pouvez aller voir la branche `with-context` du dépôt [Context vs. Redux](https://github.com/Zenika/react-context-vs-redux)

# TP-4: Gestion de formulaire avec React Hook Form

```sh
git checkout TP-04
```

Dans cette exercice nous allons utiliser React Hook Form pour controlé notre formulaire de création de tache.

- Pour chaque champs, le marqué comme `required` et affiché une erreur s'il n'est pas remplis
- Pour le libellé de la tache, limiter la saisie à 240 caractères et afficher une erreur si la limite est dépassée.

Bonus (si vous avez le temps):
- Abstraire les composant de formulaire en créant un composant `<Form>` et un composant `<InputText>`.
- Utiliser l'API watch de React Hook Form pour afficher le nombre de caractères restant pour le libellé de la tache.


# Corrigé final

```sh
git checkout TP-05
```
