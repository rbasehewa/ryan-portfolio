# [Ryan Portfolio](https://www.ryanmaddumahewa.dev)

A modern personal portfolio built with React (Vite) and a serverless Azure Functions backend powered by Azure OpenAI.
Showcases my projects, skills, and adds a live chat assistant that answers questions about my work.

## Project Overview

| Layer | Tech | Description |
|-------|------|--------------|
| Frontend | React + Vite | User-facing portfolio |
| Backend | Azure Functions | Handles AI requests |
| AI Model | Azure OpenAI (GPT-4o-mini) | Responds to chat messages |

### Setup & Run Locally

- Prerequisites
    - Node.js v18+
    - Azure Functions Core Tools v4 [Install guide](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
    - Azure OpenAI resource
    - GitHub account + Azure Static Web App (for deployment)

- Clone the Project
    - git clone https://github.com/rbasehewa/ryan-portfolio.git
    - cd ryan-portfolio/PortReact

- Setup the backend (Azure Function)
    - cd api
    - npm install
    - Create a local settings file named `PortReact/api/local.settings.json` and add the following:
        ```json
        {
        "IsEncrypted": false,
        "Values": {
            "FUNCTIONS_WORKER_RUNTIME": "node",
            "AzureWebJobsStorage": "UseDevelopmentStorage=true",

            "AZURE_OPENAI_ENDPOINT": "Azure endpoint", // make sure update it Azure endpoint
            "AZURE_OPENAI_KEY": "Key 1", // and the KEY
            "AZURE_OPENAI_DEPLOYMENT": "gpt-4o-mini",
            "AZURE_OPENAI_API_VERSION": "2024-02-15-preview"
        }
        }

    - func start  // start the function
    - you should see 
        ```json
        Functions:
        chat: [POST] http://localhost:7071/api/chat

- Run the frontend

    - Use new terminal:
        ```json
        cd ../
        npm install
        npm run dev

- You should see portfolio and chat assistant :))