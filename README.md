# MFA frontend

This repository contains the React and TypeScript frontend for a
multi-factor authentication (MFA) exercise. It provides the user interface
for registration, MFA setup with an authenticator app, login, and protected
content. The client communicates with both the existing Auth API and the
companion MFA backend.

The backend is available in the
[MFA-starter repository](https://github.com/purkkapunkki/MFA-starter).

## Prerequisites

- Node.js and npm
- The [MFA backend](https://github.com/purkkapunkki/MFA-starter) running locally
- Access to the Metropolia Auth API

If you are connecting to the Auth API from home, access requires the
Metropolia VPN.

## Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/purkkapunkki/MFA-client-starter.git
cd MFA-client-starter
npm install
```

Create a local environment file from the example:

```bash
cp .env.sample .env
```

On Windows PowerShell, use `Copy-Item .env.sample .env` instead.

The default `.env` values point to the shared Auth API and the local backend:

```dotenv
VITE_AUTH_API=https://media2.edu.metropolia.fi/auth-api/api/v1
VITE_2FA_API=http://localhost:3000/api/v1
```

Change `VITE_2FA_API` if the backend is running on a different host or port.
Restart the Vite development server after changing environment variables.

## Run the frontend

Start the Vite development server with:

```bash
npm run dev
```

Open the local URL shown by Vite, normally `http://localhost:5173`.

## Other scripts

```bash
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
npm run lint     # Check the project with ESLint
```
