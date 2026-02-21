import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  AreaChart,
  Area,
} from 'recharts';
import {
  weeklyReportData,
  monthlyTrendData,
  regionData,
  mockDashboardStats,
} from '@/data/mockData';
import { incidentTypeConfig, IncidentType } from '@/types';

const incidentColors: Record<IncidentType, string> = {
  flood: 'hsl(205, 85%, 50%)',
  rain: 'hsl(210, 70%, 60%)',
  storm: 'hsl(250, 60%, 55%)',
  heat: 'hsl(25, 95%, 55%)',
  waste: 'hsl(35, 50%, 40%)',
  pollution: 'hsl(280, 40%, 50%)',
  'water-scarcity': 'hsl(30, 85%, 50%)',
  hazard: 'hsl(0, 70%, 50%)',
};

const pieData = Object.entries(mockDashboardStats.reportsByType).map(
  ([type, value]) => ({
    name: incidentTypeConfig[type as IncidentType].label,
    value,
    color: incidentColors[type as IncidentType],
  })
);

export function WeeklyReportsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports This Week</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={weeklyReportData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="day" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Bar
                dataKey="reports"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function IncidentTypePieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports by Type</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {pieData.slice(0, 6).map((entry) => (
            <div key={entry.name} className="flex items-center gap-2 text-sm">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-muted-foreground truncate">{entry.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function MonthlyTrendChart() {
  return (
    <Card className="col-span-full lg:col-span-2">
      <CardHeader>
        <CardTitle>Monthly Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="month" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="flood"
                stackId="1"
                stroke={incidentColors.flood}
                fill={incidentColors.flood}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="rain"
                stackId="1"
                stroke={incidentColors.rain}
                fill={incidentColors.rain}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="storm"
                stackId="1"
                stroke={incidentColors.storm}
                fill={incidentColors.storm}
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="other"
                stackId="1"
                stroke="hsl(var(--muted-foreground))"
                fill="hsl(var(--muted))"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export function RegionBreakdownChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Regions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {regionData.map((region) => (
            <div key={region.region}>
              <div className="flex items-center justify-between text-sm mb-1.5">
                <span className="font-medium">{region.region}</span>
                <span className="text-muted-foreground">
                  {region.reports} ({region.percentage}%)
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full gradient-hero rounded-full transition-all"
                  style={{ width: `${region.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
