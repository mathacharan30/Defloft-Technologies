"use client";

import ProtectedRoute from "@/src/components/ProtectedRoute";
import Submissions from "@/src/views/Submissions";

export default function SubmissionsClient() {
  return (
    <ProtectedRoute>
      <Submissions />
    </ProtectedRoute>
  );
}
