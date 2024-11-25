import { motion, MotionConfig, AnimatePresence } from "framer-motion"
import './App.css'
import {
  Header,
  GuideSection,
  // ChooseStore,
  // GetExperience,
  Intro,
  // MarketPlace,
  // CommonQuestions,
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
            {/* <GetExperience /> */}
            <Intro />
            {/* <ChooseStore /> */}
            <WideRange />
            <FeaturedBrands />
            <Areas />
            {/* <MarketPlace /> */}
            {/* <CommonQuestions /> */}
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
