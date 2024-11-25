import { motion, MotionConfig, AnimatePresence } from "framer-motion"
import './App.css'
import {
  Header,
  GuideSection,
  Intro,
  WideRange,
  FeaturedBrands,
  Areas,
  Footer,
  Sidebar,
  ScrollToTop
} from './components'
import { DataContextProvider } from "./contexts/DataContext";

function App() {
  return (
    <DataContextProvider>
      <MotionConfig transition={{duration: 1}}>
        <AnimatePresence>
          <motion.div 
            className="App"
            style={{ backgroundImage: `url(/assets/image/bg.png)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: .6 }}
          >
            <Header />
            <GuideSection />
            <FeaturedBrands />
            <Intro />
            {/* <WideRange /> */}
            <Areas />
            <Footer />
            <Sidebar />
            <ScrollToTop />
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </DataContextProvider>
  );
}

export default App;
