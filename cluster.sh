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

docker build -t cuisines_migrations_image:0.1 services/cuisines/migrations/
docker build -t meals_migrations_image:0.1 services/meals/migrations/
docker build -t ingredients_migrations_image:0.1 services/ingredients/migrations/

docker build -t client_image:0.1 client/
docker build -t cuisines_image:0.1 services/cuisines/
docker build -t meals_image:0.1 services/meals/
docker build -t ingredients_image:0.1 services/ingredients/

minikube tunnel
