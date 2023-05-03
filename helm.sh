eval $(minikube -p minikube docker-env)
helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo add istio https://istio-release.storage.googleapis.com/charts
kubectl create namespace istio-system
helm install istio-base istio/base -n istio-system
helm install istiod istio/istiod -n istio-system --wait
kubectl label namespace default istio-injection=enabled
helm dependency build helm/charts/cuisines
helm dependency build helm/charts/ingredients
helm dependency build helm/charts/meals
helm install local helm
