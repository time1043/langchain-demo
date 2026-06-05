import { initChatModel } from 'langchain';

// import { ChatOpenAI } from '@langchain/openai';  // Chat Model `/v1/chat/completions`
// import { OpenAI } from '@langchain/openai';  // Text Completion `/v1/completions`

// OpenAI has two API specifications
// 1. Chat Completions API `/v1/chat/completions`
// 2. Responses API `/v1/responses`

// export const chatMimo = new ChatOpenAI({
//   model: 'mimo-v2.5-pro',
//   apiKey: process.env.MIMO_API_KEY,
//   configuration: {
//     baseURL: process.env.MIMO_OPENAI_API_URL,
//   },
//   // useResponsesApi: true,
// });

export const chatMimo = await initChatModel('openai:mimo-v2.5-pro', {
  apiKey: process.env.MIMO_API_KEY,
  configuration: {
    baseURL: process.env.MIMO_OPENAI_API_URL,
  },
});
