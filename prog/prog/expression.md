### La trilogie

- **Valeur / Type**
  - Toute valeur à un type
  - Forme/taille de la [représentation mémoire](http://)
  - Exemple : `42` de type **int**, `"abc"` de type **str**

- **Expression**
  - Produit une valeur, possède un type
  - Exemple : `6 * 7`, `"abc"[1]`

- **Instruction** &nbsp;<span class="label">languages impératifs</span>
  - Ne produit pas de valeur (même si `None`)
  - Exemple : structures de contrôle (`if`, `for`, `return` ...)

Note:
Même si non explicite il y'a des types partout
Les règles de typage sont dépendante de la théorie utilisée derrière
mais globalement le concept est similaire
Les instructions c'est pas dans ts les langages mais le concept de forme spéciale si

---

### Expressions : littéraux
#### Un monde de valeurs

- Types **simples** (immutables) : \
  entiers (`42`), flottants (`42.0`), booléens (`True`), \
  chaînes de caractères (`"Hello"`)

- Types **structurés** : \
  listes (`[]`), dictionnaires (`{:}`), t-uples (`(,)`), ensemble (`{}`)

- Fonctions : `lambda`

> Exercice: regarder avec `type` les littéraux. Profitez en pour essayer `help`

Note:
Parler de la construction et de l'envoi de message mais botter en touche (le
premier sera vu plus tard).
On peut faire ressentir le graphe d'objet sous-jacent

--

### Expressions : opérateurs

- En Python, les [opérateurs](https://docs.python.org/3.8/library/operator.html)
  sont des fonctions incarnées à travers une syntaxe particulière.

- Exemple : `+`, `*`, `/`, `**`, `in`, `is`, `&`, `^`, `~`, `|`, `[]`, `len`, `del`, ...


```python
[1, 2*1, 1 + 2*1][2]
(3 + 3**2 * 2) * 2
```

- L'**ordre d'évaluation** de ces opérateurs est important&nbsp;:

```python
2 ** 3 ** 4 # correspond à "(2 ** 3) ** 4" ou bien "2 ** (3 ** 4)" ?
```

- Le langage définit des règles de
    [précédence](https://docs.python.org/3/reference/expressions.html#operator-precedence)
    et
    d'[associativité](https://docs.python.org/3/reference/expressions.html#operator-precedence)
    afin de déterminer cet ordre.

Note: C'est syntaxique, ça se transforme en un envoi de message
      Associativité et précédence sont décrits au même endroit de la doc
      Précédence, pour des opérateurs précédents
      Associativité pour un même opérateur (gauche à droite pour tout le monde, sauf l'exponentiation)

--

### Expressions : exemples

- L'appel de fonction est une expression.

```python
abs(-12), max([5, 7, 3, 2])     # -> 12, 7
```

- L'<a
  href="https://docs.python.org/3/reference/expressions.html#conditional-expressions">opérateur
  ternaire</a> est une expression.

```python
x if x > 0 else -x              # -> la valeur absolue de x
```

- Le `in` teste l'appartenance à une liste :

```python
7 in [5, 7, 3, 2]               # -> True
```

- Le `is` teste si deux expressions s'évaluent en le même objet.

```python
0 is 0             # -> True
[] is []           # -> False, les deux listes sont des objets différents
```
