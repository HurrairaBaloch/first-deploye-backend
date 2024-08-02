pipeline {
    agent any
    tools {
        nodejs 'NodeJS 14' // The name you gave in the NodeJS configuration
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
