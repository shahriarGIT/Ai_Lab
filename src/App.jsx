import { useCallback, useState } from "react";
import "./App.css";
import Brands from "./component/Brands";
import Main from "./component/Main";
import Menu from "./component/Menu";
import Sections from "./component/Sections";
import Segment from "./component/Segment";
import Carousel from "./component/Carousel";
import Subscribe from "./component/Subscribe";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <Main />
      <Brands />
      <Sections />
      <Segment
        head="Gather Human Insight"
        para1="AUTOMATE CONTENT & LANGUAGE"
        para2="Retrieve human insights for search relevance, ecommerce, natural
        language processing, audio transcription, document processing and
        more. Operational excellence augmented by technology enables us to
        exceed demanding quality, cost, and latency requirements."
        logoImg="Automate-icon"
        segmentImg="segment-img1"
        identify="Automate"
      />
      <Segment
        head="Manage Your Datasets"
        para1="MANAGE"
        para2="Quickly choose what data to label with active
        learning and advanced querying. Visualize data, identify edge cases with
        integrated model predictions, and solve the long tail with Scale Nucleus."
        logoImg="Manage-icon"
        segmentImg="segment-img3"
        order={true}
        identify="Manage"
      />
      <Carousel />
      <Segment
        head="Generate Synthetic Data"
        para1="GENERATE"
        para2="Augment ground-truth training data with infinite varieties of synthetic data and expose your model to more data than you can otherwise collect. Confidently develop generalizable ML models by understanding how they will react to rare or dangerous real-world scenarios before you encounter them in production."
        logoImg="Generate-icon"
        segmentImg="segment-img3"
        identify="Generate"
        paddingTop={true}
      />
      <Segment
        head="Test, Validate & Debug Models"
        para1="EVALUATE"
        para2="Upload predictions to Nucleus via API. Track model performance, compare model runs, sort failure examples by metrics of interest, and build model unit tests out of curated dataset slices to catch regressions in key scenarios."
        logoImg="Evaluate-icon"
        segmentImg="segment-img4"
        order={true}
        identify="Evaluate"
      />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
