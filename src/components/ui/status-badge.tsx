import { Badge } from '@/components/ui/badge';
import { ReportStatus } from '@/types';
import { cn } from '@/lib/utils';
import { Clock, CheckCircle2, XCircle } from 'lucide-react';

interface StatusBadgeProps {
  status: ReportStatus;
  className?: string;
}

const statusConfig: Record<ReportStatus, { label: string; icon: typeof Clock; variant: string }> = {
  pending: {
    label: 'Pending',
    icon: Clock,
    variant: 'bg-warning/15 text-warning border-warning/30',
  },
  verified: {
    label: 'Verified',
    icon: CheckCircle2,
    variant: 'bg-success/15 text-success border-success/30',
  },
  rejected: {
    label: 'Rejected',
    icon: XCircle,
    variant: 'bg-destructive/15 text-destructive border-destructive/30',
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  const IconComponent = config.icon;

  return (
    <Badge
      variant="outline"
      className={cn(config.variant, 'font-medium gap-1.5', className)}
    >
      <IconComponent size={14} />
      {config.label}
    </Badge>
  );
}
