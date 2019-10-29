# Array

Adiciona novos métodos e propriedades ao objeto Array

```JavaScript
export var foo = ()=>{ Array.prototype.foo = 33; }

> [].foo
< 33
```

## Iniciando uma lista

```JavaScript
// Array(n) // n = indices
Array(10).fill(0).map((v,i)=>i)
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```


## Média

Retorna a media dos valores da array.

Implementação:


```JavaScript
Object.defineProperty(Array.prototype, 'media', {
  value: function () {
    return this.reduce((a, c) => {
      return a + c
    }) / this.length;
  }
});
```

Uso:

```JavaScript
[].media();

```

## Desvio Padão

.
