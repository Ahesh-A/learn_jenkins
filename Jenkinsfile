pipeline {
    agent any
    stages {
        stage('getting code from git repository') {
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/Ahesh-A/learn_jenkins.git']])    
            }
        }
        stage('building docker image') {
            steps{
                bat 'docker build -t aheshalagu/jenkinsln .'
            }
        }
        stage('login to dockerhub'){
            steps{
                withCredentials([string(credentialsId: 'dockerusr', variable: 'dockerusr'), string(credentialsId: 'dockerpwd', variable: 'dockerpwd')]) {
                    bat 'echo %dockerpwd%| docker login --username %dockerusr% --password-stdin' 
                }
            }
        }
        stage('push docker image to dockerhub'){
            steps{
                bat 'docker push aheshalagu/jenkinsln'
            }
        }
        stage('logout from dockerhub '){
            steps{
                bat 'docker logout'
            }
        }
        stage('doploy to kubernetes'){
            steps{
                kubernetesDeploy (configs: 'deployment.yaml', kubeconfigId: 'k8sconfigcrdls')
            }
        }
    }
}
