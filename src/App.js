import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from 'react-use-cart';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import './Responsive.css'
// HARE I WRITE ALL THE RESPONSIVE CSS FOR THIS WEBSITE


export const client = new QueryClient()

function App() {
  
  return (
    <QueryClientProvider client={client} >
      <CartProvider>
        <AllRoutes/>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
