helm repo add bitnami https://charts.bitnami.com/bitnami
helm dependency build helm/charts/common
helm dependency build helm/charts/cuisines
helm dependency build helm/charts/client
helm dependency build helm/charts/ingredients
helm dependency build helm/charts/meals
helm dep build helm/
helm upgrade --install local helm
