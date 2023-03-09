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

docker build -t cuisines_migrations_image services/cuisines/migrations/
docker build -t meals_migrations_image services/meals/migrations/
docker build -t ingredients_migrations_image services/ingredients/migrations/

docker build -t client_image client/
docker build -t cuisines_image services/cuisines/
docker build -t meals_image services/meals/
docker build -t ingredients_image services/ingredients/

minikube kubectl -- apply -f ./k8s/cuisines-db
minikube kubectl -- apply -f ./k8s/meals-db
minikube kubectl -- apply -f ./k8s/ingredients-db

minikube kubectl -- apply -f ./k8s/client
minikube kubectl -- apply -f ./k8s/cuisines
minikube kubectl -- apply -f ./k8s/meals
minikube kubectl -- apply -f ./k8s/ingredients

minikube tunnel
