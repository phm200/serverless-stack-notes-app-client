export default {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-ua-test1'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://c47sy9nn83.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_7XR5DRQ6v',
    APP_CLIENT_ID: '7l4lhn1v16nhbtsecj2rtveha8',
    IDENTITY_POOL_ID: 'us-east-1:b0a2074c-1f07-4384-958e-b5d607fb36f5'
  },
  MAX_ATTACHMENT_SIZE: 5000000
};
