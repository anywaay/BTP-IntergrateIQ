import os
import google.generativeai as genai
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

intro="Welcome to Titans AI! I’m Titans AI Assistance, here to provide information about our company and services. Whether you need AI solutions or digital marketing, I’m here to help."
info="""
About Titans AI
Titans AI transforms businesses with AI solutions and expert marketing services. We streamline operations, enhance customer interactions, and drive growth through cutting-edge technology.

Core Services
AI-Powered Chatbots

Instant Responses
Multilingual Support
Seamless Integration
AI Voice Assistants

Hands-Free Experience
Natural Language Understanding
Customizable Solutions
AI Automation

Process Optimization
Error-Free Operations
Scalable Solutions
Marketing Services (via Marketing Titans)
SEO: Boost visibility and drive organic traffic.
PPC Advertising: Targeted campaigns for maximum ROI.
Social Media Marketing: Engage audiences and build brand presence.
Content Marketing: Create high-quality content to attract customers.
Email Marketing: Nurture leads with personalized campaigns.

Why Choose Us?
Expertise: Deep knowledge in AI and marketing.
Customized Solutions: Tailored to your business needs.
Proven Results: Clients see growth and efficiency.
Innovation: We use the latest technology.

FAQs
How can Titans AI help?
We enhance your business with AI-powered solutions and digital marketing.

Can you integrate with our systems?
Yes, our AI solutions integrate seamlessly with your existing systems.

How do I get started?
Contact us to set up a consultation.

Contact Us
Website: https://marketingtitans.web.app/
LinkedIn: https://www.linkedin.com/company/titans-ai/
Email: marketingtitans00@gmail.com
"""

load_dotenv()
os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))



def get_conversational_chain():

    prompt_template = """
    Instruction for Titans AI Assistance:
    Language: if a person talks in other languages other than English answer in that language only.
    Response Style: Answer briefly (max 30 words), accurately, and in a human-like manner. Use a maximum of 3 lines.
    Context: Only use provided information. If the answer isn’t in the context, reply with, "Sorry, I’m not aware of this." and provide the contact details for these type of Questions.
    Services: If asked about services, reference Titans AI’s offerings and respond as if you work at the company.
    General Responses: For greetings like "hi" or "thanks," reply in a friendly, smart chatbot manner.
    Name: Use "Titans AI Assistance" as your name.
    Contact Info: Always include accurate contact information, as it's crucial for business.\n\n

    Context:\n {context}?\n
    Question: \n{question}\n

    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.3)

    prompt = PromptTemplate(template = prompt_template, input_variables = ["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)

    return chain

from langchain.schema import Document

docs = [Document(page_content=info, metadata={})]

def QA(user_question):
    chain = get_conversational_chain()
    response = chain(
        {"input_documents":docs, "question": user_question}
        , return_only_outputs=True)
    out=response["output_text"]
    return out
    # st.write(f"Question : {user_question}")
    # st.write("Reply: \n", out)

# def main():
#     st.set_page_config("Titans AI")
#     st.header("Welcome to Titans AI")
#     user_question = st.text_input("Start the Conversation")
#     if not user_question:
#         st.write(intro)
#     if user_question:
#         QA(user_question)
#         del user_question

if __name__ == "__main__":
    main()
    

