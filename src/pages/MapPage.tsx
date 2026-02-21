import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { IncidentMap } from '@/components/map/IncidentMap';

export default function MapPage() {
  return (
    <DashboardLayout showFooter={false}>
      <div className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)]">
        <IncidentMap height="100%" />
      </div>
    </DashboardLayout>
  );
}
