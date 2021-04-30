import React from "react";

interface MailToProps {
  emailTo: string;
  subject: string;
  body: string;
  linkLabel: string;
}

export default function MailTo({
  emailTo,
  subject,
  body,
  linkLabel,
}: MailToProps): JSX.Element {
  let params = subject || body ? "?" : "";
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${emailTo}${params}`}>{linkLabel}</a>;
}
