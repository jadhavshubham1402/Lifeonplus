// src/app/services/[id]/page.tsx
import withBasePath from "@/utils/basePath";
import ServiceDetailsClient from "./ServiceDetailsClient";

// This runs on the server (for static export)
export async function generateStaticParams() {
  try {
    const fs = require("fs");
    const path = require("path");

    // Adjust path if your data.json is not in public/data/
    const filePath = path.join(process.cwd(), "public", "data", "data.json");

    const fileContents = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileContents);

    return data.serviceData.map((service: any) => ({
      id: String(service.id),
    }));
  } catch (error) {
    console.error("Failed to generate static params:", error);
    // Fallback IDs
    return Array.from({ length: 30 }, (_, i) => ({ id: String(i + 1) }));
  }
}

// Make this component async and await params
export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ← This fixes the error

  return <ServiceDetailsClient id={id} />;
}
