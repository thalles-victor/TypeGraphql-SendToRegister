# teste-typegraphql

This version is not use prima_orm, he have only query is getMessage that return sample hello message.
run 
```console
npm install
```
and for the dev environment
```console
npm install ts-node-dev
```
Query:

```
query {
  getMessage {
    text
  }
}
```

Result:
```json 
{
  "data": {
    "getMessage": {
      "text": "Hello, TypeGraphQL"
    }
  }
}
```
