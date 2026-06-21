import Login from "@/src/views/Login";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Login",
  description: "Admin access for Devloft Technologies.",
  robots: { index: false },
};

export default function LoginPage() {
  return <Login />;
}
