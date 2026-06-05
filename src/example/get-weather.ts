import { HumanMessage } from 'langchain';

import { agentDeepseek } from '#/lib/agent';

async function getWeatherExample() {
  const result = await agentDeepseek.invoke({
    // messages: [{ role: 'user', content: "What's the weather in San Francisco?" }],
    messages: [new HumanMessage("What's the weather in San Francisco?")],
  });
  // console.log(result);
  // { messages: [HumanMessage, AIMessage, ToolMessage, AIMessage] }

  console.log(result.messages.at(-1)?.content);
}

getWeatherExample();
