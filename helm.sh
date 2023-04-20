eval $(minikube -p minikube docker-env)
helm repo add bitnami https://charts.bitnami.com/bitnami
helm dependency build helm/charts/cuisines
helm dependency build helm/charts/ingredients
helm dependency build helm/charts/meals
helm install local helm
