"use server";
import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
const token = process.env.GITHUB_AI_KEY;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1-nano";

export default async function getAI(path, result) {
  const client = ModelClient(endpoint, new AzureKeyCredential(token));

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        {
          role: "system",
          content:
            "You are a code explainer. Summarize this file in 1 paragraph. Explain what this file does, its main purpose, and key components. Do not use any markdown.",
        },
        {
          role: "user",
          content: `Filename: ${path}
    Content: ${result}`,
        },
      ],
      temperature: 1.0,
      top_p: 1.0,
      model: model,
    },
  });

  if (isUnexpected(response)) {
    throw response.body.error;
  }

  return response.body.choices[0].message.content;
}
