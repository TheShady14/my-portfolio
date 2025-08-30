"use server";

// In a real app, this would be saved to a database
// I am simulate saving this to a simple in-memory store
let submissions: Array<{
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  timestamp: Date;
  read: boolean;
}> = [];

export async function submitContactForm(formData: FormData) {
  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Basic validation
  if (!firstName || !lastName || !email || !subject || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  // Save submission
  const submission = {
    id: Date.now().toString(),
    firstName,
    lastName,
    email,
    company: company || undefined,
    subject,
    message,
    timestamp: new Date(),
    read: false,
  };

  submissions.push(submission);

  console.log("New form submission:", submission);

  return {
    success: true,
    message: "Thanks for your message! I'll get back to you soon.",
  };
}

export async function getSubmissions() {
  // Usually I would fetch from a database but this is a mock
  return submissions.sort(
    (a, b) => b.timestamp.getTime() - a.timestamp.getTime()
  );
}

export async function markAsRead(id: string) {
  const submission = submissions.find((s) => s.id === id);
  if (submission) {
    submission.read = true;
  }
  return { success: true };
}

export async function deleteSubmission(id: string) {
  submissions = submissions.filter((s) => s.id !== id);
  return { success: true };
}
