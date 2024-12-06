# BTP Project

This repository contains two main folders:

1. **Frontend**: Handles the user interface.
2. **Backend**: Manages the server-side logic and API.

---

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory:

   ```
   cd FrontEnd
   ```

3. Install dependencies:
   
   ```
   npm install
   ```

4. Start the development server:

   ```
   npm run dev
   ```


### Backend


1. Navigate to the backend directory:

   ```
   cd BackEnd
   ```

3. Build and run the Docker container:
   
   ```
   docker build -t backend-image .
   docker run -p 3000:3000 backend-image

   ```


