# UI for Tanzu Observability demo-app

### Prereqs
* node
* npm
* docker
* kubectl
* serve (installed below)

## Configure
* Install node
* Instal npm
* Perhaps run 
```console
npm init
npm install serve
```

###
**NOTE:** Edit URL for shop API: `shopUrl` in `src/constants.js`
```console
vi src/constants.js
```

## Build
### Create/package the node  app
```console
node scripts/build.js
```

### Create docker container
```console
docker build -t "shop_ui:1.0" .
```

### Push container to your registry
```console
docker push [your registery]/to-demo/shop-ui:latest
```

## Test / run locally
```console
 serve -s build
 ```

## Deploy to K8S
**NOTE:** Edit image in `71_shop-ui.yaml` to reflect your registry
```console
vi 71_shop-ui.yaml
```



```console
kubectl apply -f 71_shop-ui.yaml
kubectl apply -f 72_shop-service.yaml
```


