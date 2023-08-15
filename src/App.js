import { ConfigProvider } from 'antd';
import './App.css';
import WorkspaceLayout from './components/private/WorkspaceLayout';

function App() {
  return (
    // <div className="App">
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          borderRadius: 2,
          // Alias Token
          colorBgContainer: 'white',
        },
      }}
    >
      <WorkspaceLayout />
    </ConfigProvider>

    // </div>
  );
}

export default App;
