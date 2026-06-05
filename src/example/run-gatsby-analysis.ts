import { agent, deepAgent } from '#/lib/agent';

const content = `Project Gutenberg hosts a full plain-text copy of F. Scott Fitzgerald's The Great Gatsby.
URL: https://www.gutenberg.org/files/64317/64317-0.txt

Answer as much as you can:

1) How many lines in the complete Gutenberg file contain the substring \`Gatsby\` (count lines, not occurrences within a line, each line ends with a line break).
2) The 1-based line number of the first line in the file that contains \`Daisy\`.
3) A two-sentence neutral synopsis.

Do your best on (1) and (2). If at any point you realize you cannot **verify** an exact answer with
your available tools and reasoning, do not fabricate numbers: use \`null\` for that field and spell out
the limitation in \`how_you_computed_counts\`. If you encounter any errors please report what the error was and what the error message was.`;

async function runGatsbyAnalysis() {
  const agentResult = await agent.invoke(
    { messages: [{ role: 'user', content }] },
    { configurable: { thread_id: 'great-gatsby-lc' } },
  );
  const agentMessages = agentResult.messages;
  console.log('\n=== Agent ===\n');
  console.log(agentMessages[agentMessages.length - 1]!.contentBlocks);

  const deepAgentResult = await deepAgent.invoke(
    { messages: [{ role: 'user', content }] },
    { configurable: { thread_id: 'great-gatsby-da' } },
  );
  const deepMessages = deepAgentResult.messages;
  console.log('\n=== DeepAgent ===\n');
  console.log(deepMessages[deepMessages.length - 1]!.contentBlocks);
}

runGatsbyAnalysis().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
