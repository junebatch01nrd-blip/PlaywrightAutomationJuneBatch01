pipeline {
    agent any

    environment {
        CI = 'true'
    }

    triggers {
        pollSCM('H/2 * * * *')
    }

    options {
        timestamps()
        timeout(time: 60, unit: 'MINUTES')
        skipDefaultCheckout(false)
    }

    stages {
        stage('Clean workspace') {
            steps {
                dir('Playwright_Automation') {
                    bat '''
                        IF EXIST allure-results rmdir /S /Q allure-results
                        IF EXIST allure-report rmdir /S /Q allure-report
                        IF EXIST playwright-report rmdir /S /Q playwright-report
                        IF EXIST test-results rmdir /S /Q test-results
                    '''
                }
            }
        }

        stage('Install dependencies') {
            steps {
                dir('Playwright_Automation') {
                    bat 'npm install'
                }
            }
        }

        stage('Install Playwright browsers') {
            steps {
                dir('Playwright_Automation') {
                    bat 'npx playwright install'
                }
            }
        }

        stage('Run smoke tests') {
            steps {
                dir('Playwright_Automation') {
                    bat 'npx playwright test --grep "@smoke"'
                }
            }
        }

        stage('Generate Allure report') {
            steps {
                dir('Playwright_Automation') {
                    bat '''
                        IF EXIST allure-results (
                            IF EXIST allure-report rmdir /S /Q allure-report
                            npx allure generate allure-results --clean -o allure-report
                        ) ELSE (
                            echo No allure results found.
                        )
                    '''
                }
            }
        }
    }

    post {
        always {
            dir('Playwright_Automation') {
                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report'
                ])

                publishHTML(target: [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'allure-report',
                    reportFiles: 'index.html',
                    reportName: 'Allure Report'
                ])

                junit 'test-results/results.xml'
            }
        }

        success {
            echo 'Smoke tests completed successfully.'
        }

        failure {
            echo 'Smoke tests failed. Check the reports and logs for details.'
        }
    }
}
