import z from 'zod';

import { chatDeepSeek } from '#/lib/chat-model';

const Movie = z.object({
  title: z.string().describe('The title of the movie'),
  year: z.number().describe('The year the movie was released'),
  director: z.string().describe('The director of the movie'),
  rating: z.number().describe("The movie's rating out of 10"),
});

async function runStructuredOutput() {
  const response = await chatDeepSeek
    .withStructuredOutput(Movie)
    .invoke('Provide details about the movie Inception');
  console.log(response);
}

runStructuredOutput();
