import { redirect } from "next/navigation";
import { LANDING_PATH } from "@/lib/site";

/** Obsah žije na `/skolenie-gdpr-zodpovedna-osoba` — `/` len redirect. */
export default function Home() {
  redirect(LANDING_PATH);
}
