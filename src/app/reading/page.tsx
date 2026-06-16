// src/app/reading/page.tsx
// ページを削除してコナラへリダイレクト
import { redirect } from "next/navigation";

export default function ReadingPage() {
  redirect("https://coconala.com/services/4271405");
}
