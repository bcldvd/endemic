import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

const api =
  'https://api.fusionfabric.cloud/payment/payment-initiation/v1/credit-transfer/international/initiate';
const samplePayload = {
  sourceId: 'GPP',
  initiatingParty: 'DHILDHILXXX',
  paymentInformationId: 'MyPmntInfId',
  paymentMethod: 'TRF',
  requestedExecutionDate: '2018-09-30',
  paymentIdentification: {
    instructionIdentification: 'MyInstrId',
    endToEndIdentification: 'MyEndToEndId',
  },
  instructionPriority: 'Normal',
  chargeBearer: 'BorneByCreditor',
  instructedAmount: {
    amount: 200,
    currency: 'EUR',
  },
  equivalentAmt: {
    amount: 200,
    currency: 'EUR',
  },
  exchangeRate: {
    baseOneRate: 0.7,
    exchangeRateTypeCode: 'SPOT',
  },
  contractId: 'string',
  preCalculatedCharges: {
    amount: 100,
    currency: 'EUR',
    suppressAdditionalCharges: true,
  },
  debitorAgent: {
    identification: 'DHILDHILXXX',
  },
  debtorAccountId: {
    identificationType: 'IBAN',
    identification: '123456789',
    name: 'Name',
    currency: 'EUR',
  },
  creditor: {
    name: 'creditorName',
    postalAddress: {
      addressLine: ['68 Rue de Charenton'],
      street: 'Rue de Charenton',
      buildingNumber: '68',
      postalCode: '70012',
      city: 'City Name',
      countrySubDivision: 'New York',
      country: 'US',
    },
  },
  creditorAgent: {
    identification: 'DHILDHILXXX',
  },
  creditorAccountId: {
    identificationType: 'IBAN',
    identification: '123456789',
    creditorAccountName: 'CreditorName',
  },
  intermediaryAgt1: {
    identification: 'DHILDHILXXX',
  },
  intermediaryAgt2: {
    identification: 'DHILDHILXXX',
  },
  intermediaryAgt3: {
    identification: 'DHILDHILXXX',
  },
  relatedRemittanceInformation: {
    remittanceIdentification: 'remittanceId',
    remittanceLocationMethod: 'URID',
    remittanceLocationElectronicAddress: 'remittance text lines',
  },
  remittanceInformationUnstructured: 'RmtInf1234',
  externalCategoryPurposeCode: 'EPAY',
};

export default async (req: NowRequest, res: NowResponse) => {
  const token = await getToken();

  try {
    const response = await axios.post(api, samplePayload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Request-ID': 123,
      },
    });

    res.status(200).send({ response });
  } catch (err) {
    res.status(500).send(err.config.data);
  }
};

const getToken = async (
  accessTokenUrl: string = process.env.ACCES_TOKEN_URL,
  clientId: string = process.env.CLIENT_ID,
  clientSecret: string = process.env.CLIENT_SECRET
) => {
  const data =
    'grant_type=client_credentials&client_id=' +
    clientId +
    '&client_secret=' +
    clientSecret;

  const response = await axios.post(accessTokenUrl, data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  return response.data.access_token;
};
