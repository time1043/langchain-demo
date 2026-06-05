import { createDeepAgent } from 'deepagents';
import { createAgent } from 'langchain';

import { chatMimo } from './chat-model';
import { checkpointer } from './memory';
import { SYSTEM_PROMPT } from './prompt';
import { fetchTextFromUrl } from './tool';

export const agent = createAgent({
  model: chatMimo,
  tools: [fetchTextFromUrl],
  systemPrompt: SYSTEM_PROMPT,
  checkpointer,
});

export const deepAgent = createDeepAgent({
  model: chatMimo,
  tools: [fetchTextFromUrl],
  systemPrompt: SYSTEM_PROMPT,
  checkpointer,
});
