import { Route, Routes } from 'react-router-dom';
import { TopPage } from '../pages/TopPage';
import { DiagnosisPage } from '../pages/DiagnosisPage';
import { AnalyzingPage } from '../pages/AnalyzingPage';
import { ResultPage } from '../pages/ResultPage';
import { TypesPage } from '../pages/TypesPage';
import { TypeDetailPage } from '../pages/TypeDetailPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/diagnosis" element={<DiagnosisPage />} />
      <Route path="/analyzing" element={<AnalyzingPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/types" element={<TypesPage />} />
      <Route path="/types/:slug" element={<TypeDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
