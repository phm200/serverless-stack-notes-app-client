const dev = {
  STRIPE_KEY: 'pk_test_okv4jQ270V5VSQQGZfJVLgS9006IJ1aaXy',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-1p886mddbpc8q'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://1o3dmg25sl.execute-api.us-east-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_6WfiNHZaV',
    APP_CLIENT_ID: '69f2tceii9i9jdciga3r3bsggg',
    IDENTITY_POOL_ID: 'us-east-1:2c2aa06d-7e4d-41b2-89fa-9dfb732331e8'
  }
};

const prod = {
  STRIPE_KEY: 'pk_test_okv4jQ270V5VSQQGZfJVLgS9006IJ1aaXy',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-1dse5g8zu1mcg'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://1gk9mtpsk6.execute-api.us-east-1.amazonaws.com/prod/notes'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_MoX3b6qD4',
    APP_CLIENT_ID: 'enh8iafjppe9mdb26qk917r',
    IDENTITY_POOL_ID: 'us-east-1:a8f08cf3-66f7-4199-944d-48b431cae0b7'
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
