// This file holds the Genkit flow for the AI support chatbot.
'use server';

/**
 * @fileOverview An AI-powered chatbot for answering user questions about the service.
 *
 * - askQuestion - A function that handles user questions and returns answers from the chatbot.
 * - AskQuestionInput - The input type for the askQuestion function.
 * - AskQuestionOutput - The return type for the askQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskQuestionInputSchema = z.object({
  question: z.string().describe('The user question.'),
});
export type AskQuestionInput = z.infer<typeof AskQuestionInputSchema>;

const AskQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type AskQuestionOutput = z.infer<typeof AskQuestionOutputSchema>;

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const faqsSchema = z.array(faqSchema);

const getRelevantFaqs = ai.defineTool({
  name: 'getRelevantFaqs',
  description: 'Retrieves relevant FAQs based on the user question.',
  inputSchema: z.object({
    question: z.string().describe('The user question.'),
  }),
  outputSchema: faqsSchema,
},
async (input) => {
    // Replace this with your actual FAQ retrieval logic
    const faqs = [
        {
            "question": "How do I purchase followers?",
            "answer": "You can purchase followers by selecting a package and completing the payment process."
        },
        {
            "question": "Is the payment process secure?",
            "answer": "Yes, we use secure payment gateways to ensure your transactions are safe."
        },
        {
            "question": "How long does it take to receive my followers?",
            "answer": "Followers are typically added to your account immediately after payment."
        },
        {
            "question": "Can I track my order?",
            "answer": "Yes, you can track the status of your order in real-time on our website."
        },
        {
            "question": "What payment methods do you accept?",
            "answer": "We accept major credit cards and PayPal."
        }
    ];

    const relevantFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(input.question.toLowerCase())
    );

    return relevantFaqs;
});


export async function askQuestion(input: AskQuestionInput): Promise<AskQuestionOutput> {
  return askQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askQuestionPrompt',
  input: {schema: AskQuestionInputSchema},
  output: {schema: AskQuestionOutputSchema},
  tools: [getRelevantFaqs],
  prompt: `You are a customer support chatbot for InstaBoost, a service that sells Instagram followers.  Use the getRelevantFaqs tool to answer the user's question, and only answer based on the FAQs. If no FAQs are relevant, respond that you cannot answer the question.

User question: {{{question}}}`,
});

const askQuestionFlow = ai.defineFlow(
  {
    name: 'askQuestionFlow',
    inputSchema: AskQuestionInputSchema,
    outputSchema: AskQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
