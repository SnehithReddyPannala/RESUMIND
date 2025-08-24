1. Introduction
In the current job market, most companies utilize Applicant Tracking Systems (ATS) to screen resumes. Candidates often struggle to optimize their resumes for ATS readability, leading to missed opportunities despite strong qualifications. The AI Resume Analyzer is designed to address this challenge by providing automated resume evaluation, ATS scoring, and actionable improvement suggestions.
This project leverages modern web technologies and AI to create a fully client-side application that allows users to upload their resume (PDF), analyze it, and receive feedback in real-time.
________________________________________
2. Objectives
•	✅ Allow users to upload resumes securely in PDF format.
•	✅ Analyze resumes for ATS compliance, keyword matching, formatting, and overall quality.
•	✅ Provide AI-powered feedback with detailed recommendations.
•	✅ Store resumes and analysis results in a cloud-based client-side storage (Puter).
•	✅ Enable users to view multiple uploaded resumes and track their performance.
•	✅ Maintain a minimal, responsive, and accessible UI.
________________________________________
3. Methodology
The project follows a modular development approach with the following phases:
1.	Requirement Analysis – Identify features such as authentication, resume upload, ATS analysis, and report generation.
2.	Architecture Design – Define frontend architecture using React 19, Zustand, Tailwind CSS, and Puter integration.
3.	Implementation – Build modular components for upload, authentication, and analysis.
4.	Testing – Verify accuracy of AI responses, file handling, and error resilience.
5.	Deployment – Deploy via Vite with server-side rendering (SSR) enabled for performance.
________________________________________
4. System Architecture
4.1 High-Level Design
•	Frontend Framework: React 19 with React Router v7 (SSR).
•	State Management: Zustand for global store.
•	Styling: Tailwind CSS v4 with custom utilities.
•	Puter SDK:
o	Authentication (sign in/out, user session).
o	File system (resume PDF/image storage).
o	Key-Value database (resume metadata, AI feedback).
o	AI API (feedback generation, JSON response).
•	PDF Processing: pdfjs-dist with local worker for performance.
•	Build Tool: Vite 6 with TypeScript 5.
4.2 Flow of Data
1.	User Authentication → via Puter Auth.
2.	Resume Upload → PDF stored in Puter FS.
3.	Thumbnail Generation → Convert first PDF page to image.
4.	AI Analysis → Resume + Job Description → AI returns structured JSON feedback.
5.	Storage → Resume record (JSON + file paths) stored in Puter KV.
6.	Resume Listing → User can view all uploaded resumes from KV.
7.	Resume Report → Detailed feedback displayed with ATS score, category-wise tips, and overall evaluation.
________________________________________
5. Implementation
5.1 Authentication
•	Implemented with Puter’s auth.signIn() and auth.signOut().
•	Guards ensure only authenticated users can access resume upload and analysis.
5.2 Resume Upload
•	Built with react-dropzone.
•	Validates PDF-only format, size limit 20 MB.
•	Uploads to Puter FS and generates a PNG thumbnail using pdfjs-dist.
5.3 AI Feedback
•	Calls puter.ai.feedback(filePath, instructions).
•	Instructions are dynamically prepared with job title + description.
•	Expected AI response: pure JSON (as per AIResponseFormat).
•	Response parsed, stored in KV, and displayed to user.
5.4 Resume Listing & Details
•	kv.list('resume:*') fetches all resumes.
•	Each resume displayed as a card with thumbnail and ATS score.
•	Clicking a resume opens detailed view with:
o	Summary: Overall ATS score.
o	ATS: Compliance score + tips.
o	Details: Category-wise breakdown (skills, formatting, keywords).
5.5 Wipe Functionality
•	Deletes all files and KV records for a user with one click.
•	Provides clean slate for re-analysis.
________________________________________
6. Results & Output
Key Features Delivered:
•	Upload and analyze multiple resumes.
•	AI-powered ATS scoring and recommendations.
•	Clean, responsive UI with Tailwind CSS.
•	Secure storage and retrieval via Puter FS + KV.
•	Resume thumbnails for easy browsing.
Sample Output:
•	ATS Score: 72/100
•	Strengths: Clear formatting, strong work experience.
•	Weaknesses: Missing relevant keywords, inconsistent font usage.
•	Recommendations: Add role-specific skills, optimize section headings, maintain consistency.
________________________________________
7. Challenges Faced
•	AI Response Handling: Parsing errors occurred when AI returned non-JSON text.
•	File Storage: Managing PDFs and thumbnails together required structured KV references.
•	Auth Edge Cases: Auto-login across accounts caused confusion during testing.
•	Error Surfaces: Minimal error UI (needed better toasts + retry logic).
________________________________________
8. Future Enhancements
•	📌 Resume comparison tool between multiple uploads.
•	📌 AI-powered job description matching for resume tailoring.
•	📌 Export reports in PDF/Word format.
•	📌 Support for multi-language resumes.
•	📌 Add analytics dashboard with resume performance history.
•	📌 Integrate role-based keyword recommendations from live job postings.
________________________________________
9. Conclusion
The AI Resume Analyzer successfully provides a client-side, AI-powered tool for resume optimization. With its secure architecture, seamless Puter integration, and actionable feedback, it demonstrates how modern AI applications can directly impact job seekers’ success.
The project highlights the synergy between frontend frameworks (React + Zustand + Tailwind) and cloud SDKs (Puter) in building scalable AI-powered web solutions.

