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

docker build -t cuisines-migrations-image:0.1 services/cuisines/migrations/
docker build -t meals-migrations-image:0.1 services/meals/migrations/
docker build -t ingredients-migrations-image:0.1 services/ingredients/migrations/

docker build -t client-image:0.1 client/
docker build -t cuisines-image:0.1 services/cuisines/
docker build -t meals-image:0.1 services/meals/
docker build -t ingredients-image:0.1 services/ingredients/
docker build -t cafe-image:0.1 services/cafe/

minikube tunnel
