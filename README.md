# vm-aws-cli-sso-autologin
A ViolentMonkey (or any userscript manager that's compatible) for automating the login to AWS from the CLI for SSO pages.

Install it in your favortie userscript manager, and configure the variables.

Replace the URL of the SSO login page, probably looks like device.sso.us-east-1.amazonaws.com. It might change depending on the default region for your account. This is for the first page, the one with the code on it.
SSO_URL = "device.sso.us-east-1.amazonaws.com"

For the second page, we need to verify that we're granting permission to the right app.
PORTAL_URL is URL of the portal page, probably looks like yourcompany.awsapps.com
PORTAL_URL = "REPLACEME.awsapps.com"
APP_NAME is the part in bold where it's allowing access to the app. It probably looks like botocore-client-yourcompany
APP_NAME = "botocore-client-REPLACME"


Thanks to https://github.com/johnjeffers for his help with this.
