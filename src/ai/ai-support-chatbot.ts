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
  question: z.string().describe('A pergunta do usuário.'),
});
export type AskQuestionInput = z.infer<typeof AskQuestionInputSchema>;

const AskQuestionOutputSchema = z.object({
  answer: z.string().describe('A resposta para a pergunta do usuário.'),
});
export type AskQuestionOutput = z.infer<typeof AskQuestionOutputSchema>;

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const faqsSchema = z.array(faqSchema);

const getRelevantFaqs = ai.defineTool({
  name: 'getRelevantFaqs',
  description: 'Recupera FAQs relevantes com base na pergunta do usuário.',
  inputSchema: z.object({
    question: z.string().describe('A pergunta do usuário.'),
  }),
  outputSchema: faqsSchema,
},
async (input) => {
    // Substitua isso pela sua lógica real de recuperação de FAQs
    const faqs = [
        {
            "question": "Como eu compro seguidores?",
            "answer": "Você pode comprar seguidores selecionando um pacote e concluindo o processo de pagamento."
        },
        {
            "question": "O processo de pagamento é seguro?",
            "answer": "Sim, usamos gateways de pagamento seguros para garantir que suas transações sejam seguras."
        },
        {
            "question": "Quanto tempo leva para receber meus seguidores?",
            "answer": "Os seguidores são normalmente adicionados à sua conta imediatamente após o pagamento."
        },
        {
            "question": "Posso rastrear meu pedido?",
            "answer": "Sim, você pode acompanhar o status do seu pedido em tempo real em nosso site."
        },
        {
            "question": "Quais métodos de pagamento vocês aceitam?",
            "answer": "Aceitamos os principais cartões de crédito e PayPal."
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
  prompt: `Você é um chatbot de suporte ao cliente para o InstaImpulso, um serviço que vende seguidores para o Instagram. Use a ferramenta getRelevantFaqs para responder à pergunta do usuário e responda apenas com base nas FAQs. Se nenhuma FAQ for relevante, responda que você não pode responder à pergunta.

Pergunta do usuário: {{{question}}}`,
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
