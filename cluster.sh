#/bin/sh

minikube start
eval $(minikube -p minikube docker-env)
minikube addons enable ingress
minikube kubectl -- get po -A

minikube kubectl -- delete pods --all
minikube kubectl -- delete services --all
minikube kubectl -- delete deployments --all
minikube kubectl -- delete ingress --all
minikube kubectl -- delete secret --all
minikube kubectl -- delete persistentvolumeclaim --all

docker image pull ev1ch/cuisines-migrations-image:0.1
docker image pull ev1ch/meals-migrations-image:0.1
docker image pull ev1ch/ingredients-migrations-image:0.1
docker image tag ev1ch/cuisines-migrations-image:0.1 cuisines-migrations-image:0.1
docker image tag ev1ch/meals-migrations-image:0.1 meals-migrations-image:0.1
docker image tag ev1ch/ingredients-migrations-image:0.1 ingredients-migrations-image:0.1

docker image pull ev1ch/client-image:0.1
docker image pull ev1ch/cuisines-image:0.1
docker image pull ev1ch/meals-image:0.1
docker image pull ev1ch/ingredients-image:0.1
docker image pull ev1ch/cafe-image:0.1
docker image pull ev1ch/logger-image:0.1
docker image tag ev1ch/client-image:0.1 client-image:0.1
docker image tag ev1ch/cuisines-image:0.1 cuisines-image:0.1
docker image tag ev1ch/meals-image:0.1 meals-image:0.1
docker image tag ev1ch/ingredients-image:0.1 ingredients-image:0.1
docker image tag ev1ch/cafe-image:0.1 cafe-image:0.1
docker image tag ev1ch/logger-image:0.1 logger-image:0.1

minikube tunnel
