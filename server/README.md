Server setup and MongoDB connection

1) Install dependencies

```bash
cd server
npm install
```

2) Create `.env` file

Copy `server/.env.example` to `server/.env` and fill the `MONGODB_URL` value.

Example (MongoDB Atlas):

```
MONGODB_URL=mongodb+srv://<user>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=4000
```

3) Start the server (development)

```bash
npm run dev
```

4) Verify connection

Server will attempt to connect to the DB on startup. If `MONGODB_URL` is missing or invalid, the process will log an error and exit.

Notes
- Ensure your Atlas IP whitelist allows your IP or set to allow access from anywhere during development.
- Keep `.env` out of source control. Add `server/.env` to `.gitignore` if not present.
