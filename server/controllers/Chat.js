const Course = require("../models/Course")

// POST /chat/query
// body: { query: string, persona?: string }
exports.queryChat = async (req, res) => {
  try {
    const { query } = req.body
    if (!query || typeof query !== "string") {
      return res.status(400).json({ success: false, message: "Query is required" })
    }

    const regex = new RegExp(query.split(" ").join("|"), "i")

    const courses = await Course.find({
      $or: [
        { courseName: { $regex: regex } },
        { courseDescription: { $regex: regex } },
        { whatYouWillLearn: { $regex: regex } },
        { tag: { $in: query.split(/\s+/).map((t) => new RegExp(t, "i")) } },
      ],
    })
      .limit(10)
      .select("courseName courseDescription price thumbnail _id")

    return res.status(200).json({ success: true, results: courses })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ success: false, message: "Server Error" })
  }
}
