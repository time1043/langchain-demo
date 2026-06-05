import { createAgent } from 'langchain';

import { chatMimo } from './chat-model';
import { getWeather } from './tool';

// https://reference.langchain.com/javascript/langchain/index/createAgent
export const agentDeepseek = createAgent({
  model: chatMimo,
  tools: [getWeather],
});
