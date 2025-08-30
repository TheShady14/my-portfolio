"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getSubmissions, markAsRead, deleteSubmission } from "../actions";
import {
  Mail,
  MailOpen,
  Trash2,
  User,
  Building,
  Calendar,
  MessageSquare,
} from "lucide-react";
import "./admin.css";

interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export default function AdminInbox() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] =
    useState<Submission | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubmissions();
  }, []);

  const loadSubmissions = async () => {
    try {
      const data = await getSubmissions();
      setSubmissions(data);
    } catch (error) {
      console.error("Error loading submissions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    await markAsRead(id);
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, read: true } : sub))
    );
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this message?")) {
      await deleteSubmission(id);
      setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
      if (selectedSubmission?.id === id) {
        setSelectedSubmission(null);
      }
    }
  };

  const unreadCount = submissions.filter((sub) => !sub.read).length;

  if (loading) {
    return (
      <div className="admin-container">
        <div className="admin-header">
          <h1 className="admin-title">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h1 className="admin-title">Contact Form Inbox</h1>
        <div className="admin-stats">
          <Badge variant="secondary" className="admin-badge">
            {submissions.length} Total Messages
          </Badge>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="admin-badge">
              {unreadCount} Unread
            </Badge>
          )}
        </div>
      </div>

      <div className="admin-content">
        {/* Inbox List */}
        <div className="inbox-list">
          <div className="inbox-header">
            <h2 className="inbox-title">Messages</h2>
          </div>

          <div className="message-list">
            {submissions.length === 0 ? (
              <div className="empty-state">
                <Mail className="empty-icon" />
                <p className="empty-text">No messages yet</p>
              </div>
            ) : (
              submissions.map((submission) => (
                <div
                  key={submission.id}
                  className={`message-item ${
                    !submission.read ? "unread" : ""
                  } ${
                    selectedSubmission?.id === submission.id ? "selected" : ""
                  }`}
                  onClick={() => {
                    setSelectedSubmission(submission);
                    if (!submission.read) {
                      handleMarkAsRead(submission.id);
                    }
                  }}
                >
                  <div className="message-icon">
                    {submission.read ? (
                      <MailOpen className="w-4 h-4" />
                    ) : (
                      <Mail className="w-4 h-4" />
                    )}
                  </div>

                  <div className="message-content">
                    <div className="message-header">
                      <span className="message-sender">
                        {submission.firstName} {submission.lastName}
                      </span>
                      <span className="message-time">
                        {new Date(submission.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="message-subject">{submission.subject}</div>
                    <div className="message-preview">
                      {submission.message.substring(0, 100)}...
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="message-detail">
          {selectedSubmission ? (
            <Card className="message-card">
              <CardHeader className="message-card-header">
                <div className="message-detail-header">
                  <CardTitle className="message-detail-title">
                    {selectedSubmission.subject}
                  </CardTitle>
                  <div className="message-actions">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(selectedSubmission.id)}
                      className="delete-button"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="message-card-content">
                <div className="sender-info">
                  <div className="sender-detail">
                    <User className="detail-icon" />
                    <div>
                      <p className="detail-label">From</p>
                      <p className="detail-value">
                        {selectedSubmission.firstName}{" "}
                        {selectedSubmission.lastName}
                      </p>
                    </div>
                  </div>

                  <div className="sender-detail">
                    <Mail className="detail-icon" />
                    <div>
                      <p className="detail-label">Email</p>
                      <a
                        href={`mailto:${selectedSubmission.email}`}
                        className="detail-link"
                      >
                        {selectedSubmission.email}
                      </a>
                    </div>
                  </div>

                  {selectedSubmission.company && (
                    <div className="sender-detail">
                      <Building className="detail-icon" />
                      <div>
                        <p className="detail-label">Company</p>
                        <p className="detail-value">
                          {selectedSubmission.company}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="sender-detail">
                    <Calendar className="detail-icon" />
                    <div>
                      <p className="detail-label">Received</p>
                      <p className="detail-value">
                        {new Date(
                          selectedSubmission.timestamp
                        ).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="message-body">
                  <div className="message-body-header">
                    <MessageSquare className="w-5 h-5" />
                    <span>Message</span>
                  </div>
                  <div className="message-text">
                    {selectedSubmission.message}
                  </div>
                </div>

                <div className="reply-section">
                  <Button
                    className="reply-button"
                    onClick={() =>
                      window.open(
                        `mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}`
                      )
                    }
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Reply via Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="no-selection">
              <Mail className="no-selection-icon" />
              <p className="no-selection-text">
                Select a message to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
