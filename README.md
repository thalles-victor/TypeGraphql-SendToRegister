como fazer a mutation
```console
curl --request POST   --header 'content-type: application/json'   --url 'https://api-auth-typegraphql.herokuapp.com/'   --data '{"query":"mutation  { resgister(data: {name: \"teste\", email: \"teste@gmail.com\"}) {name }  }"}'
{"errors":[{"message":"Unique constraint failed on the fields: (`email`)","locations":[{"line":1,"column":13}],"path":["resgister"],"extensions":{"code":"INTERNAL_SERVER_ERROR","exception":{"code":"P2002","clientVersion":"3.9.1","meta":{"target":["email"]}}}}],"data":null}
```
