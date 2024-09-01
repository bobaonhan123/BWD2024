pipeline {
    agent any
    stages {
        stage('Setup') {
            steps {
                // Checkout code from repository
                checkout scm
            }
        }

        stage('Build Client') {
            steps {
                script {
                    // Run the Node.js build process inside a Docker container
                    docker.image('node:18-alpine').inside('-u root:root') {
                        sh 'pwd'
                        sh 'npm ci'
                        sh 'npm run build'
                        // Verify dist directory creation
                        sh 'ls -a'
                    }
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh 'pwd'
                    sh 'ls -a'
                    sh 'docker build -t takeiteasy-client:latest .'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Remove existing container if it exists
                    sh 'docker rm -f takeiteasy-client || true'
                    // Run the docker container
                    sh 'docker run -d -p 5173:80 --name takeiteasy-client takeiteasy-client:latest'
                }
            }
        }
    }
    post {
        always {
            // Clean up Docker images and containers if necessary
            sh 'docker system prune -af'
        }
    }
}
