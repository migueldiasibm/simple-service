
Tentando criar o manifest...

manifest.yml

```yml
applications:
- name: migueld-simple-service
  memory: 64M
routes:
  - route: migueld-simple-service.mybluemix.net
  - route: migueld-simple-service.mybluemix.net:13420/ping
command: pwd && ls && node app.js
```

###

do meu console de bluemix

#### Domains

migueldomain.apps	
migueldomain.services	

### PORT

para definir a porta para meu servico (app), tenho que definir a variavel de ambiente:

process.env.PORT

bluemix cf env migueld-simple-service -> lista as variaveis de ambiente para minha aplicacao;
bluemix cf set-env migueld-simple-service PORT 13420 -> nao funcionou
bluemix cf set-env migueld-simple-service CF_INSTANCE_PORT 13420 -> ok
bluemix cf set-env migueld-simple-service CF_INSTANCE_PORTS=[{external:13420,internal:13420},{external:4500,internal:4500}]

bluemix cf restage migueld-simple-service

CF_INSTANCE_PORTS=[{external:13420,internal:13420},{external:4500,internal:4500}]


