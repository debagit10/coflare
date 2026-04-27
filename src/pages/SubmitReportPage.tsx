import { motion } from "framer-motion";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ReportForm } from "@/components/reports/ReportForm";

export default function SubmitReportPage() {
  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <ReportForm />
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
