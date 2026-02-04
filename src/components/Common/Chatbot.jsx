import React, { useState, useRef, useEffect } from "react"
import { apiConnector } from "../../services/apiConnector"

const Chatbot = () => {
  const [open, setOpen] = useState(false)
  const [persona, setPersona] = useState("ask") // 'ask' = Ask StudyNotion, 'trainee' = Trainee It
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: "Hello! I'm Ask StudyNotion — how can I help you today?" },
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  const sendMessage = async () => {
    const trimmed = input.trim()
    if (!trimmed) return
    const userMsg = { id: Date.now(), sender: "user", text: trimmed }
    setMessages((m) => [...m, userMsg])
    setInput("")
    // Call backend chat/search endpoint to find relevant courses
    try {
      setMessages((m) => [...m, { id: Date.now() + 2, sender: "bot", text: "Searching for courses..." }])
      const resp = await apiConnector("post", "/chat/query", { query: trimmed, persona })
      if (resp && resp.data && resp.data.success) {
        const courses = resp.data.results || []
        if (courses.length === 0) {
          setMessages((m) => [...m, { id: Date.now() + 3, sender: "bot", text: "I couldn't find any matching courses." }])
        } else {
          // Build a friendly response listing up to 5 courses
          const listText = courses.slice(0, 5).map((c, i) => `${i + 1}. ${c.courseName} — ${c.courseDescription ? c.courseDescription.substring(0, 80) + (c.courseDescription.length > 80 ? '...' : '') : ''} `).join('\n')
          setMessages((m) => [...m, { id: Date.now() + 4, sender: "bot", text: `Found ${courses.length} course(s):\n${listText}` }])
        }
      } else {
        setMessages((m) => [...m, { id: Date.now() + 5, sender: "bot", text: "Sorry, something went wrong searching courses." }])
      }
    } catch (err) {
      console.error(err)
      setMessages((m) => [...m, { id: Date.now() + 6, sender: "bot", text: "Network error while searching courses." }])
    }
  }

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage()
  }

  return (
    <div>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50">
        {open && (
          <div className="w-80 max-w-full rounded-lg bg-white shadow-lg text-richblack-900">
            <div className="flex items-center justify-between rounded-t-lg bg-richblack-800 p-3 text-white">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{persona === "ask" ? "Ask StudyNotion" : "Trainee It"}</div>
                <div className="text-xs text-richblack-300">AI assistant</div>
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={persona}
                  onChange={(e) => setPersona(e.target.value)}
                  className="rounded bg-richblack-700 px-2 py-1 text-sm text-white"
                >
                  <option value="ask">Ask StudyNotion</option>
                  
                </select>
                <button onClick={() => setOpen(false)} className="ml-2 text-sm font-medium">Close</button>
              </div>
            </div>

            <div ref={scrollRef} className="max-h-64 overflow-auto p-3 text-sm">
              {messages.map((m) => (
                <div key={m.id} className={`mb-2 flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`${m.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-richblack-900"} max-w-[85%] rounded px-3 py-2`}>{m.text}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 rounded-b-lg border-t p-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Type your question..."
                className="w-full rounded px-2 py-1 text-sm"
              />
              <button onClick={sendMessage} className="rounded bg-richblack-900 px-3 py-1 text-sm text-white">Send</button>
            </div>
          </div>
        )}

        {/* Toggle button to open chat */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-2 rounded-full bg-richblack-900 px-4 py-3 text-white shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 4.906 14.32L16 16l-1.68-3.094A8 8 0 0 0 8 0z" />
          </svg>
          <span className="text-sm">{open ? "Close" : "Ask"}</span>
        </button>
      </div>
    </div>
  )
}

export default Chatbot
