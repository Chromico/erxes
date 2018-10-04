const commonParamsDef = `
  $name: String!,
  $brandId: String!,
  $languageCode: String
`;

const commonParams = `
  name: $name,
  brandId: $brandId,
  languageCode: $languageCode
`;

const sendGmailFields = `
  $integrationId: String!,
  $cocType: String!,
  $cocId: String!,
  $subject: String!,
  $body: String!,
  $toEmails: String!,
  $cc: String,
  $bcc: String,
  $attachments: [String]
`;

const sendGmailVariables = `
  integrationId: $integrationId,
  cocType: $cocType,
  cocId: $cocId,
  subject: $subject,
  body: $body,
  toEmails: $toEmails,
  cc: $cc,
  bcc: $bcc,
  attachments: $attachments
`;

const integrationsCreateMessenger = `
  mutation integrationsCreateMessengerIntegration(${commonParamsDef}) {
    integrationsCreateMessengerIntegration(${commonParams}) {
      _id
    }
  }
`;

const integrationsEditMessenger = `
  mutation integrationsEditMessengerIntegration($_id: String!, ${commonParamsDef}) {
    integrationsEditMessengerIntegration(_id: $_id, ${commonParams}) {
      _id
    }
  }
`;

const integrationsSaveMessengerConfigs = `
  mutation integrationsSaveMessengerConfigs($_id: String!, $messengerData: IntegrationMessengerData) {
    integrationsSaveMessengerConfigs(_id: $_id, messengerData: $messengerData) {
      _id
    }
  }
`;

const integrationsSaveMessengerAppearance = `
  mutation integrationsSaveMessengerAppearanceData($_id: String!, $uiOptions: MessengerUiOptions) {
    integrationsSaveMessengerAppearanceData(
      _id: $_id
      uiOptions: $uiOptions
    ) {
      _id
    }
  }
`;

const integrationsSendGmail = ` 
  mutation integrationsSendGmail(${sendGmailFields}) {
    integrationsSendGmail(${sendGmailVariables}) {
      status
      statusText
    }
  }
`;

const integrationsRemove = `
  mutation integrationsRemove($_id: String!) {
    integrationsRemove(_id: $_id)
  }
`;

export default {
  integrationsCreateMessenger,
  integrationsEditMessenger,
  integrationsSaveMessengerConfigs,
  integrationsSaveMessengerAppearance,
  integrationsSendGmail,
  integrationsRemove
};
