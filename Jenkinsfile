pipeline {
    agent any
     tools {
        nodejs 'NodeJS 14' // Ensure this matches the name configured in Jenkins
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/HurrairaBaloch/first-deploye-backend.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
            junit 'target/test-*.xml'
        }
    }
}
