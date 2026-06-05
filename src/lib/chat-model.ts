import { initChatModel } from 'langchain';

// // deepseek-chat = deepseek-v4-flash non-thinking mode (deprecated 2026/07/24)
// export const chatDeepSeek = await initChatModel('deepseek:deepseek-chat', {});

// deepseek-v4-flash with thinking disabled (non-thinking mode)
export const chatDeepSeek = await initChatModel('deepseek:deepseek-v4-flash', {
  modelKwargs: { thinking: { type: 'disabled' } },
});

// // deepseek-v4-flash with thinking enabled by default
// // Error: Thinking mode does not support this tool_choice ❌
// export const chatDeepSeek = await initChatModel('deepseek:deepseek-v4-flash', {});
