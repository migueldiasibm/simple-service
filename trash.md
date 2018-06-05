
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

VAMOS LA! CF NAO ACEITA MULTIPLAS PORTAS POR APP, APENAS UMA!
tem uma versao rolando que vai aceitar, mas ainda nao esta estavel....

AINDA NAO ACEITA NA PUBLIC CLOUD DA IBM!

----

Nos toolchains da IBM Cloud nao consigo configurar repositorios do github...
tem que ser no git "interno" https://git.ng.bluemix.net
 -> na realidade da sim! é que o toolchain "Github and issues tracking" já configura para o github interno da ibm;
 -> é só da add em tools e selecionar GIT
https://github.com/migueldiasibm/simple-service

Funcionou ok
http://migueld-simple-service.mybluemix.net:13420/ping

bluemix cf env migueld-simple-service -> lista as variaveis de ambiente para minha aplicacao;
bluemix cf set-env migueld-simple-service PORT 13420 -> nao funcionou
bluemix cf set-env migueld-simple-service CF_INSTANCE_PORT 13420 -> ok
bluemix cf set-env migueld-simple-service CF_INSTANCE_PORTS=[{external:13420,internal:13420},{external:4500,internal:4500}]

bluemix cf restage migueld-simple-service

CF_INSTANCE_PORTS=[{external:13420,internal:13420},{external:4500,internal:4500}]

tentando criar porta
bluemix cf create-route dev migueld-simple-service.mybluemix.net --port 13420 -> errado
bluemix cf create-route dev mybluemix.net --port 13420 -> certo mas nao pode criar no HTTP
bluemix cf app migueld-simple-service --guid
bluemix cf curl /v2/apps/$(cf app migueld-simple-service --guid) -X PUT -d '\{"ports": \[8080, 4500, 13420\]\}'

bluemix cf curl /v2/apps/8a48a0f8-6a7b-4291-abcb-4d9dc37cc48f -X PUT -d '\{"ports": \[8080, 4500, 13420\]\}'


bluemix cf create-route dev mybluemix.net --hostname migueld-simple-service --port 13420

bluemix cf create-route dev mybluemix.net --hostname migueld-simple-service --port 13420

bluemix cf create-route dev mybluemix.net --hostname migueld-simple-service:13420 --path /ping

   cf create-route my-space example.com --port 5000                 # example.com:5000