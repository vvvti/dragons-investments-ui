### Example application

This is regular application created via spring.io. Have a look at:

-   `Jenkinsfile` you'll find here how to build, push and deploy you application.
-   `kubernetes.yaml` check IngressRoute to find out how publish your application with DNS name over HTTPS

#### Notes:

-   expose management port in you app and set readiness and liveness probes
-   remember to push docker images to appropriate registry
-   to keep registry easy-to-read, prefix your docker image with project name (ie. `training/demo-app`)
-   in kubernetes steps use `fintech/kubernetes-agent` agent which contains git, kubectl, helm
-   you don't have to specify kubernetes namespace - it's limited to project in which you build (ie. Training apps will be deployed to training namespace only)
-   there are two kuberentes configurations available `kubeconfig-sit` and `kubeconfig-sit` (check Jenkinsfile)
-   because of using tag `latest` you need to execute `kubectl rollout restart deployment demo-app`
-   use project as a DNS subdomain, to keep it clear (ie. `demo-app.training.fintechchallenge.pl`)
-   protect your ingress with basic auth credentials (using Traefik middleware)
-   in order to deploy application to production - use dedicated Jenkins job

Application is available here: (username: example, password: example)

-   SIT - https://dragons-investments-ui.ersa-team.sit.fintechchallenge.pl/
-   UAT - https:///dragons-investments-ui.ersa-team.uat.fintechchallenge.pl/
-   PROD - https://dragons-investments-ui.ersa-team.prod.fintechchallenge.pl/
