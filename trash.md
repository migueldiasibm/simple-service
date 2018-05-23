
Tentando criar o manifest...

manifest.yml

```yml
applications:
- name: migueld-simple-service
  memory: 64M
routes:
  - route: migueld-simple-service
  - route: migueld-simple-service:13420/ping
command: pwd && ls && node app.js
```