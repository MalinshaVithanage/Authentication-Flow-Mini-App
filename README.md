# Authentication-Flow-Mini-App


# Tech Stack:
• Next.js

• TypeScript

• Tailwind CSS

• Zustand for state management

# Features :
# Login Page
• Matched the UI as per the Figma file

• Fields: Email + Password

• Form validation: required fields, email format

• Only accept:

o Email: test@visionexdigital.com.au

o Password: password123

• Showed error message if credentials are incorrect

• On success, store session in Zustand and redirect to dashboard

# Dashboard Page (Protected Route)
• Message: “Welcome, you’re logged in.”

• Logout button → clears session and redirects to login

# Routing
• Used Next.js app routing

• Redirect unauthenticated users to the login page
