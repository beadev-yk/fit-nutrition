# FitNutrition

&#x20; &#x20;

## 🚀 Project Overview

**FitNutrition** is a web app for personalized fitness and nutrition planning, enhanced with an **AI voice assistant**. Users can simply speak to the assistant to receive customized health plans.

## 🌐 Live Demo

Visit the deployed app: [fitnutrition.vercel.app](https://fitnutrition.vercel.app/)

## 🔧 Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/fit-nutrition.git
cd fit-nutrition
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_signin_url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_signup_url

NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key

CONVEX_DEPLOYMENT=your_convex_deployment_id
NEXT_PUBLIC_CONVEX_URL=https://your-convex-url.convex.cloud
```

### 4. Run the development server

```bash
npm run dev
```

Navigate to `http://localhost:3000` in your browser to start using the app.

## 🧠 Key Features

- 🎙️ **AI Voice Assistant**: Powered by VAPI, users can talk to the AI for planning
- 🧍‍♂️ **Personalized Fitness Plan**: Custom plans based on user input
- 🍏 **Tailored Nutrition Advice**
- 🔐 **Authentication**: Secure login/signup using Clerk
- ☁️ **Realtime Backend**: Uses Convex for backend logic and storage

## 🛠️ Tech Stack

**Frontend**: Next.js, Tailwind CSS\
**Backend**: Convex\
**Auth**: Clerk\
**AI Assistant**: VAPI AI

## 📁 Folder Structure (Optional)

You can add a folder structure overview here later if needed.

## 📜 License

MIT (or your chosen license)

## 🙌 Contributions

Feel free to fork this project, raise issues, or submit PRs!

---

Built with ❤️ by Astronaut
