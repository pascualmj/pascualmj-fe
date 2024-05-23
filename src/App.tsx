import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'styles/normalize.css';
import 'styles/reset.css';
import 'styles/typography.css';
import 'styles/global.css';
import 'styles/overrides.css';
import { RootRouter } from 'router/RootRouter';
import { ToastService } from 'services/toast';
import { HelmetProvider } from 'react-helmet-async';
import { ConfirmDialogService } from 'services/confirmDialog';

const App = () => {
  return (
    <HelmetProvider context={{}}>
      <ToastService />
      <ConfirmDialogService />
      <RootRouter />
    </HelmetProvider>
  );
};

export default App;
