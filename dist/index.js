import { config } from 'dotenv';
// Load environment variables from .env file
config();
// This will automatically use the LANGCHAIN_API_KEY from .env for tracing
async function main() {
    // Check if we have the necessary environment variables
    if (!process.env.LANGCHAIN_API_KEY) {
        console.error("Error: LANGCHAIN_API_KEY is not set in the .env file");
        process.exit(1);
    }
    console.log("LangSmith tracing is enabled with API key:", process.env.LANGCHAIN_API_KEY);
    console.log("Project:", process.env.LANGCHAIN_PROJECT || "default");
    // You would typically use your OpenAI API key here
    // For this example, we'll just show the structure without making actual API calls
    try {
        // This is just a placeholder - you would need to add your OpenAI API key to use this
        // const model = new ChatOpenAI({
        //   openAIApiKey: process.env.OPENAI_API_KEY,
        // });
        // Instead, let's just log what would happen
        console.log("In a complete setup, this would create a chain and execute it with LangSmith tracing");
        console.log("The trace would appear in your LangSmith dashboard at https://smith.langchain.com");
        // Example of what the code would look like:
        /*
        const prompt = PromptTemplate.fromTemplate(
          "Tell me a short joke about {topic}"
        );
        
        const chain = RunnableSequence.from([
          prompt,
          model,
          new StringOutputParser(),
        ]);
        
        const result = await chain.invoke({ topic: "programming" });
        console.log(result);
        */
    }
    catch (error) {
        console.error("Error:", error);
    }
}
main().catch(console.error);
//# sourceMappingURL=index.js.map