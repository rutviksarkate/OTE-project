"use client";

import { useState } from "react";
import { gmailLink } from "@/lib/mailto";
import { company } from "@/lib/site";

const initial = { name: "", email: "", organisation: "", message: "", companyFax: "" };

export default function EnquiryForm() {
  const [values, setValues] = useState(initial);
  const [note, setNote] = useState("");

  function update(event) {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function submit(event) {
    event.preventDefault();
    if (values.companyFax) return;
    const lines = [`Name: ${values.name}`, `Email: ${values.email}`];
    if (values.organisation) lines.push(`Organisation: ${values.organisation}`);
    lines.push("", values.message);
    const body = lines.join("\n");
    window.open(
      gmailLink({
        to: company.email,
        subject: `Project enquiry from ${values.name}`,
        body,
      }),
      "_blank",
      "noopener,noreferrer",
    );
    setNote("Gmail should open with this message. Send it to finish the enquiry.");
  }

  return (
    <form onSubmit={submit} className="space-y-4 bg-white p-6 md:p-8">
      <label className="block text-sm">
        Name
        <input required name="name" value={values.name} onChange={update} className="mt-1 w-full border border-line px-3 py-3 outline-none focus:border-bronze" />
      </label>
      <label className="block text-sm">
        Email
        <input required type="email" name="email" value={values.email} onChange={update} className="mt-1 w-full border border-line px-3 py-3 outline-none focus:border-bronze" />
      </label>
      <label className="block text-sm">
        Organisation
        <input name="organisation" value={values.organisation} onChange={update} className="mt-1 w-full border border-line px-3 py-3 outline-none focus:border-bronze" />
      </label>
      <label className="block text-sm">
        Message
        <textarea required name="message" rows={6} value={values.message} onChange={update} className="mt-1 w-full border border-line px-3 py-3 outline-none focus:border-bronze" />
      </label>
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Fax
        <input tabIndex={-1} autoComplete="off" name="companyFax" value={values.companyFax} onChange={update} />
      </label>
      <button type="submit" className="bg-navy px-5 py-3 text-sm font-semibold text-white">
        Open in Gmail
      </button>
      {note ? (
        <p className="text-sm text-steel" role="status">
          {note}
        </p>
      ) : null}
    </form>
  );
}
