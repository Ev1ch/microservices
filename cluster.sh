#/bin/sh

minikube start
eval $(minikube -p minikube docker-env | Invoke-Expression)
minikube addons enable ingress
minikube kubectl -- get po -A

docker build -t client_image client/
docker build -t cuisines_image services/cuisines/
docker build -t meals_image services/meals/
docker build -t ingredients_image services/ingredients/

minikube kubectl -- apply -f ./k8s/meals-db
minikube kubectl -- apply -f ./k8s/cuisines-db
minikube kubectl -- apply -f ./k8s/ingredients-db

minikube kubectl -- apply -f ./k8s/client
minikube kubectl -- apply -f ./k8s/meals
minikube kubectl -- apply -f ./k8s/cuisines
minikube kubectl -- apply -f ./k8s/ingredients

minikube tunnel
