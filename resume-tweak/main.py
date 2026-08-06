import ollama
import argparse
import streamlit as st


def main():
    ''' Main method to orchestrate the execution of the resume tailoring. '''

    resume_text = input('Please paste your resume text:\n')
    job_description = input('Please paste the target job description:\n')


    # 2. Combine them into a structured prompt
    system_prompt = (
        "You are an expert recruiter. Give concise, constructive feedback how much the experience matches the job description. Then tailor this resume to match the job description. "
        "Optimize keywords and action verbs. Do not invent fake experience."
    )

    user_prompt = f"Resume:\n{resume_text}\n\nJob Description:\n{job_description}"

    # 3. Stream the response locally from Llama 3.1
    response = ollama.chat(
        model='llama3.1',
        messages=[
            {'role': 'system', 'content': system_prompt},
            {'role': 'user', 'content': user_prompt}
        ],
        stream=True # Streaming prints the text piece-by-piece as it generates
    )

    # 4. Print the output as it arrives
    print("--- Tailored Resume Output ---")
    for chunk in response:
        print(chunk['message']['content'], end='', flush=True)


if __name__ == "__main__":
    main()