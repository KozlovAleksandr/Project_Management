import { useState } from 'react';
import Header from './layout/Header';
import Modal from './Modal';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <div style={{ height: 'calc(100vh - 48px)' }}>
      <div className="h-full mx-auto">
        <Modal />
        <Header />
        <div className="flex h-full">
          <Sidebar />
          <div
            className="bg-[#181920]"
            style={{ width: 'calc(100vw - 276px)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
