import ReportViewer, { Callbacks, RequestOptions } from 'devexpress-reporting-react/dx-report-viewer';
import './indexdev.css';
import { Box } from '@mui/material';
import 'devextreme/dist/css/dx.light.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.common.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css';
import 'devexpress-reporting/dist/css/dx-webdocumentviewer.css';
interface ReportComponentProps {
  src: string; 
  reportName: string;
}

export default function ReportComponent({ src, reportName }: ReportComponentProps) {


  // Concaténer le filtre à l'URL du rapport

  return (
    <Box className="report-container">
<div style={{ width: '100%', overflow: 'auto' }}>
{/* Utiliser l'URL du rapport avec le filtre */}
<ReportViewer
  reportUrl={reportName}
>
  <RequestOptions host={src} invokeAction="DXXRDV" />

</ReportViewer>

      </div>
    </Box>
  );
}
