
📰 New Generation Music Blog

A modern MERN Stack blog platform where artists, writers, and fans can share posts, music updates, and creative content.
Hosted on Vercel with Cloudnaly integrated for file uploads and data storage.

🌍 Live URL: newgenerationmusic.vercel.app



🚀 Tech Stack

Area	Technology

Frontend	React.js (Vite)
Backend	Node.js + Express
Database	MongoDB (Mongoose ORM)
File Uploads / Cloud Storage	Cloudnaly
Hosting	Vercel and Render
Language	JavaScript (ES6)



🧩 Project Structure

All code (both frontend and backend) is contained in a single folder for simplicity.

newgenerationmusic/
│
├── client/               # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/               # Node + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
├── .env                  # Environment variables (MongoDB URI, Cloudnaly keys, etc.)
├── package.json          # Combined scripts
└── README.md             # You are here


✨ Features

✅ User-friendly blog interface for posts and updates
✅ Secure REST API built with Express and MongoDB
✅ File and media uploads powered by Cloudnaly
✅ Responsive design for mobile and desktop
✅ Single-folder project setup for easier deployment
✅ Deployed on Vercel (frontend + backend combined)


---

🔧 Planned Improvements

🛠️ Split backend and frontend into separate folders for cleaner structure
🛠️ Add authentication (JWT / OAuth) for users
🛠️ Improve dashboard for admins and content creators
🛠️ Add comment and like system
🛠️ Optimize image handling and upload progress display
🛠️ Enhance UI with animations and better design


---

⚙️ How to Run Locally

1. Clone this repo:

git clone https://github.com/yourusername/newgenerationmusic.git
cd newgenerationmusic


2. Install dependencies:

npm install


3. Set up environment variables: Create a .env file in the root folder with:

MONGO_URI=your_mongodb_connection_string
CLOUDNALY_API_KEY=your_cloudnaly_key
PORT=5000


4. Run the app:

npm start

By default, backend runs on http://localhost:5000 and frontend on http://localhost:5173.





📤 Deployment

The entire project is hosted on Vercel and Render:
Frontend + Backend in one deployment folder.
Cloudnaly handles media uploads remotely through its API.


👨‍💻 Author

Reuben

> Passionate MERN Stack developer exploring cloud integration and creative media platforms.




📄 License

This project is open-source and free to use for educational and personal development purposes.

