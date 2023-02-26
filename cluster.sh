#/bin/sh

minikube start 
minikube kubectl -- get po -A
minikube tunnel
minikube docker-env
minikube kubectl -- apply -f ./k8s/client
minikube kubectl -- apply -f ./k8s/meals
minikube kubectl -- apply -f ./k8s/cuisines
minikube kubectl -- apply -f ./k8s/ingredients
minikube kubectl -- proxy 