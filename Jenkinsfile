pipeline {
    agent {
        docker {
          image 'mcr.microsoft.com/playwright:v1.51.0-noble'
        }
    }


    stages {      
      stage("TEST STAGE"){

        steps{
                sh "yarn"
                sh "yarn test"  
            }  
            
        }
      }
    }
