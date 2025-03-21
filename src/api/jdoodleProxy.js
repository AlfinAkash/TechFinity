import axios from 'axios';

export const compileCode = async (code, language, version, clientId, clientSecret) => {
  const url = 'https://api.jdoodle.com/v1/execute';
  const data = {
    clientId: clientId,
    clientSecret: clientSecret,
    script: code,
    language: language,
    versionIndex: version
  };

  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};
