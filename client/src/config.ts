// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'm7jzkylowh'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/prod`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-p18tn1oa.us.auth0.com',            // Auth0 domain
  clientId: 'zl0qznBc0lvZTFw3sFv0bRTDQjElmzqc',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
