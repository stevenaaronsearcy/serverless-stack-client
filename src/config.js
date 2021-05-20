const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notetakings-app-upload",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://uamik1rjf8.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_9sSHhImA1",
    APP_CLIENT_ID: "1use59oa2r4b2ekq1v0biejtti",
    IDENTITY_POOL_ID: "us-east-2:8a556854-dc25-4315-8a43-2c5ac1e6d9cb",
  },
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51IqvNCHDmCMhcsRHboEHCRAtARhQqdaJuHxAOpAYVJBDXTA98iwCiM3PjtB7oGWsTIkJt0THmfsEf44tuXDn0XaM00YDXDODDl",
};

export default config;
