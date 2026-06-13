import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import { Layout } from "@/components/layout";

export default function Admin() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!user?.isAdmin) setLocation("/");
  }, [user]);

  return (
    <Layout>
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">صفحة الإدارة غير متاحة في هذا الإصدار</p>
      </div>
    </Layout>
  );
}
