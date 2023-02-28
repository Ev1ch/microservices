#/bin/sh

minikube start 
minikube kubectl -- get po -A
minikube tunnel
minikube docker-env
docker docker build -t cuisines_image services/cuisines/Dockerfile .
docker docker build -t meals_image services/meals/Dockerfile .
docker docker build -t ingredients_image services/ingredients/Dockerfile .
docker docker build -t client_image services/client/Dockerfile .
minikube kubectl -- apply -f ./k8s/client
minikube kubectl -- apply -f ./k8s/meals
minikube kubectl -- apply -f ./k8s/cuisines
minikube kubectl -- apply -f ./k8s/ingredients
# minikube kubectl -- proxy 
kubectl apply -f k8s/client/ingress.yaml
kubectl apply -f k8s/meals/ingress.yaml
kubectl apply -f k8s/cuisines/ingress.yaml
kubectl apply -f k8s/ingredients/ingress.yaml