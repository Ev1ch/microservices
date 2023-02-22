#/bin/sh

minikube start --vm-driver=docker
minikube kubectl -- get po -A
minikube tunnel
