pipeline {
    agent {
        docker {
          image 'mcr.microsoft.com/playwright:v1.51.0-noble'
        }
    }


    stages {      
      stage("TEST STAGE"){

        environment {
            DEBUG="pw:browser,pw:api,pw:protocol"
        }

        steps{
                sh "yarn"
                sh "yarn playwright test"  
            }  
            
        }
      }
    }
