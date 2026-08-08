import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "10mb" }));

  // Initialize Gemini AI lazily/safely
  let ai: GoogleGenAI | null = null;
  const getAI = () => {
    if (!ai && process.env.GEMINI_API_KEY) {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return ai;
  };

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({
      status: "online",
      company: "GenX Technologies",
      timestamp: new Date().toISOString(),
      hasGeminiKey: !!process.env.GEMINI_API_KEY,
    });
  });

  // Gemini AI Solution Advisor Endpoint
  app.post("/api/gemini/advisor", async (req, res) => {
    try {
      const { industry, challenge, goal, timeline, budget } = req.body;

      if (!challenge) {
        return res.status(400).json({ error: "Challenge description is required." });
      }

      const clientAI = getAI();

      if (!clientAI) {
        // Fallback structured proposal if API Key is not set yet
        return res.json({
          roadmap: {
            executiveSummary: `GenX Technologies AI Strategic Roadmap for ${industry || "Enterprise"}`,
            suggestedArchitecture: `Custom Hybrid AI Architecture incorporating fine-tuned domain LLMs, Vector DB Retrieval Augmented Generation (RAG), and event-driven automation pipelines tailored for: "${challenge}".`,
            keyPhases: [
              {
                phase: "Phase 1: Discovery & Data Audit (Weeks 1-2)",
                deliverable: "Data readiness assessment, security boundary definition, and architectural blueprint."
              },
              {
                phase: "Phase 2: POC & Model Fine-Tuning (Weeks 3-5)",
                deliverable: "Custom baseline model prototype, RAG index creation, and benchmark validation."
              },
              {
                phase: "Phase 3: Integration & Agent Orchestration (Weeks 6-8)",
                deliverable: "API connector deployment, agentic workflow guardrails, and shadow testing."
              },
              {
                phase: "Phase 4: SLA Deployment & Optimization (Weeks 9-10)",
                deliverable: "Production Cloud Run / Kubernetes deployment with 24/7 telemetry monitoring."
              }
            ],
            estimatedROI: "320% - 450% estimated first-year ROI through 65% reduction in manual processing latency.",
            techStack: ["Gemini 3.6 Flash / Llama 3", "Qdrant / PGVector", "FastAPI / Node.js", "Docker & Kubernetes", "PyTorch"],
            recommendedGenXServices: [
              "Custom Generative AI & RAG Engineering",
              "Enterprise AI Security & Governance Audit",
              "Autonomous AI Agent Workflow Integration"
            ],
            consultingNextStep: "Schedule a 30-minute discovery call with a GenX Lead AI Architect to refine this roadmap."
          }
        });
      }

      const prompt = `You are the Lead Principal AI/ML Architect at GenX Technologies, a top-tier enterprise AI consulting firm.
A potential client from the ${industry || "General Industry"} sector reached out with the following requirement:
Challenge: "${challenge}"
Goal: "${goal || "Automate operations and maximize efficiency"}"
Target Timeline: "${timeline || "Flexible"}"
Budget Bracket: "${budget || "Standard Consultancy"}"

Please provide a highly professional, structured JSON object containing a detailed GenX AI Solution Roadmap.
Respond strictly in JSON matching this schema:
{
  "executiveSummary": "Concise high-level summary of the GenX recommended strategy",
  "suggestedArchitecture": "Technical architecture summary (e.g. LLM fine-tuning, RAG, Computer Vision pipeline, Multi-agent system)",
  "keyPhases": [
    {
      "phase": "Phase title and duration",
      "deliverable": "Specific tangible outcome"
    }
  ],
  "estimatedROI": "Expected financial or efficiency gains quantification",
  "techStack": ["Array of 4-6 recommended tools/frameworks/models"],
  "recommendedGenXServices": ["Array of 2-3 specific GenX consulting offerings"],
  "consultingNextStep": "Call to action advice"
}`;

      const response = await clientAI.models.generateContent({
        model: "gemini-3.6-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
      });

      let parsedResult;
      try {
        parsedResult = JSON.parse(response.text || "{}");
      } catch (parseErr) {
        parsedResult = { rawText: response.text };
      }

      return res.json({ roadmap: parsedResult });
    } catch (err: any) {
      console.error("Error in Gemini advisor endpoint:", err);
      return res.status(500).json({
        error: "Failed to generate AI solution roadmap.",
        details: err?.message || "Internal server error",
      });
    }
  });

  // Contact / Enquiry Submission Endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, phone, company, projectType, budget, message, preferredContact } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const refId = `GENX-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    return res.json({
      success: true,
      referenceId: refId,
      message: `Thank you ${name}. Your enquiry has been received. A GenX AI Consultant will review your request and get back to you via ${preferredContact || "email"} within 12 business hours.`,
      receivedData: {
        refId,
        name,
        email,
        phone,
        company,
        projectType,
        budget,
        message,
        timestamp: new Date().toISOString()
      }
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[GenX Server] App running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
