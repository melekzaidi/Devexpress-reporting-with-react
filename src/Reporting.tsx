import ReportViewer, { RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';
import './indexdev.css';
import { Box } from '@mui/material';
import 'devextreme/dist/css/dx.light.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.common.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css';
import 'devexpress-reporting/dist/css/dx-webdocumentviewer.css';
import { useEffect, useState } from 'react';
import { getApiUrlReporting } from './action';

interface ReportComponentProps {
  reportName: string;
}

export default function ReportComponent({ reportName }: ReportComponentProps) {
  const [host, setHost] = useState<string | null>(null);

  // Fetch the API URL when the component mounts
  useEffect(() => {
    const fetchHost = async () => {
      try {
        const apiUrl = await getApiUrlReporting();
        console.log(apiUrl);
        setHost(apiUrl);
      } catch (error) {
        console.error('Error fetching API URL:', error);
      }
    };
    fetchHost();
  }, []);

  // Render nothing until the host is fetched
  if (!host) {
    return <div>Loading...</div>;
  }

  return (
    <Box className="report-container">
      <div style={{ width: '100%', overflow: 'auto' }}>
        {/* Render ReportViewer only when the host is available */}
        <ReportViewer reportUrl={reportName}>
          <RequestOptions host={host} invokeAction={`DXXRDV`} />
        </ReportViewer>
      </div>
    </Box>
  );
}
