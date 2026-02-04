const mongoose = require("mongoose")
require("dotenv").config()

const { MONGODB_URL, NODE_ENV } = process.env

async function connectToMongo(uri) {
	await mongoose.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
}

exports.connect = async () => {
	if (MONGODB_URL) {
		try {
			await connectToMongo(MONGODB_URL)
			console.log("DB Connection Success")
			return
		} catch (err) {
			console.error("DB Connection Failed", err)
			// fallthrough to in-memory option in development
		}
	} else {
		console.warn("MONGODB_URL is not set in environment variables.")
	}

	// If we're in development, try an in-memory MongoDB as a fallback
	if (NODE_ENV !== "production") {
		try {
			console.log("Attempting to start in-memory MongoDB (mongodb-memory-server)")
			const { MongoMemoryServer } = require("mongodb-memory-server")
			const mongod = await MongoMemoryServer.create()
			const uri = mongod.getUri()
			await connectToMongo(uri)
			console.log("Connected to in-memory MongoDB")
			// keep reference to stop later if needed
			exports._memoryServer = mongod
			return
		} catch (err) {
			console.error("In-memory MongoDB start failed", err)
		}
	}

	console.error("Could not establish a MongoDB connection.")
}
