#! /bin/zsh

#cd $1

if [ -z "${K8S_REPOSITORY}" ]
then 
    echo "Please set the REPOSITORY_PREFIX"
else 
	if [[ -f prepare.sh ]]; then
		./prepare.sh
	fi

	docker build . -t ${K8S_REPOSITORY}$1
	docker push $K8S_REPOSITORY$1

	if [[ -f clean.sh ]]; then
		./clean.sh
	fi
fi

cd ..
