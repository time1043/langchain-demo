import { initChatModel } from 'langchain';

// // https://docs.langchain.com/oss/javascript/integrations/chat/deepseek
// // https://api-docs.deepseek.com/
// export const chatDeepSeek = new ChatDeepSeek({
//   model: 'deepseek-v4-flash',
//   temperature: 0,
//   // other params...
// });

export const chatDeepSeek = await initChatModel('deepseek:deepseek-v4-flash', {
  temperature: 0.5,
  // timeout: 300,
  // maxTokens: 25000,
});

// import { MODEL_PROVIDER_CONFIG } from 'langchain/chat_models/universal';
// for (const [k, v] of Object.entries(MODEL_PROVIDER_CONFIG)) {
//   console.log(k.padEnd(20), v.package, '->', v.className);
// }

// openai               @langchain/openai -> ChatOpenAI
// anthropic            @langchain/anthropic -> ChatAnthropic
// azure_openai         @langchain/openai -> AzureChatOpenAI
// cohere               @langchain/cohere -> ChatCohere
// google               @langchain/google -> ChatGoogle
// google-vertexai      @langchain/google-vertexai -> ChatVertexAI
// google-vertexai-web  @langchain/google-vertexai-web -> ChatVertexAI
// google-genai         @langchain/google-genai -> ChatGoogleGenerativeAI
// ollama               @langchain/ollama -> ChatOllama
// mistralai            @langchain/mistralai -> ChatMistralAI
// mistral              @langchain/mistralai -> ChatMistralAI
// groq                 @langchain/groq -> ChatGroq
// bedrock              @langchain/aws -> ChatBedrockConverse
// aws                  @langchain/aws -> ChatBedrockConverse
// deepseek             @langchain/deepseek -> ChatDeepSeek
// xai                  @langchain/xai -> ChatXAI
// cerebras             @langchain/cerebras -> ChatCerebras
// fireworks            @langchain/fireworks -> ChatFireworks
// together             @langchain/together-ai -> ChatTogetherAI
// perplexity           @langchain/perplexity -> ChatPerplexity
