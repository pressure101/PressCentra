import streamlit as st
import ollama

# Configure the web page layout
st.set_page_config(page_title="Local AI Resume Tuner", layout="wide")

st.title("📄 Local AI Resume Tuner")
st.subheader("Keep your data private—powered fully by your local Ollama instance.")

# Create two columns side-by-side for inputs
col1, col2 = st.columns(2)

with col1:
    resume_input = st.text_area(
        "Paste Your Current Resume:", 
        height=400, 
        placeholder="Paste text or markdown version of your resume here..."
    )

with col2:
    job_input = st.text_area(
        "Paste Target Job Description:", 
        height=400, 
        placeholder="Paste the job description or requirements here..."
    )

# Centered action button
if st.button("🚀 Optimize My Resume", type="primary", use_container_width=True):
    # Basic validation to ensure fields aren't empty
    if not resume_input or not job_input:
        st.error("Please fill out both the resume and job description fields.")
    else:
        st.divider()
        st.subheader("✨ Tailored Resume Recommendations")
        
        # Prepare the prompts for the AI
        # system_prompt = (
        #     "You are an expert technical recruiter. Give a percentage match for how well this resume aligns with the job description. Tailor this resume to match the job description, which includes changing language in the"
        #     "resume to better align with the job description. Highlight relevant skills, experience, and achievements. Suggest improvements to formatting and structure."
        #     "Optimize keywords and action verbs in those sentences, not in a separate section. Point out missing skills. Do not invent fake experience."
        # )
        system_prompt = (
            "You are an a technical recruiter trying to match candidates with your open position. Give a feedback in the following format:"
            "1. Resume Match Percentage: [percentage]"
            "2. Missing skills: [list of missing requirements or skills from the JD]"
            "3. Resume Optimization Suggestions: [list of suggestions to improve the resume to better match the job description]"
            "4. Examples of how to leverage the candidate's experience to better match the job description: [list of examples]"
        )
        user_prompt = f"Resume:\n{resume_input}\n\nJob Description:\n{job_input}"
        
        # Create an empty container to stream text into real-time
        output_placeholder = st.empty()
        full_response = ""
        
        try:
            # Query the local Ollama model (Make sure 'ollama run llama3.1' works first)
            response_stream = ollama.chat(
                model='llama3.1',
                messages=[
                    {'role': 'system', 'content': system_prompt},
                    {'role': 'user', 'content': user_prompt}
                ],
                stream=True
            )
            
            # Stream chunks as they arrive from your GPU/RAM
            for chunk in response_stream:
                text_chunk = chunk['message']['content']
                full_response += text_chunk
                # Render markdown formatting automatically (bolding, bullet points, etc.)
                output_placeholder.markdown(full_response + "▌")
                
            # Remove the cursor block when finished
            output_placeholder.markdown(full_response)
            
        except Exception as e:
            st.error(f"Failed to connect to Ollama. error detail: {e}")
            st.info("Make sure the Ollama application is running in the background and you have downloaded the 'llama3.1' model.")
