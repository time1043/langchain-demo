import { createAgent } from 'langchain';

import { getWeather } from './tool';

// https://reference.langchain.com/javascript/langchain/index/createAgent
export const agentDeepseek = createAgent({
  model: 'deepseek:deepseek-v4-flash', // "provider:model"
  tools: [getWeather],
});
