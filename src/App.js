import { useState } from "react";
import PickOneSkipN from "./components/PickOneSkipN";
import CaesarShift from "./components/CaesarShift";
import StringManipulation from "./components/StringManipulation";
import Statistics from "./components/Statistics";
import { Card, Col, Row, Container } from "react-bootstrap";
import Masonry from "react-masonry-css";

function App() {
  const [string, setString] = useState("");

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    500: 1,
  };

  return (
    <Container fluid>
      <Row xs={1} md={2} xl={3} noGutters>
        <Col
          xs={{ span: 12 }}
          md={{ span: 8, offset: 2 }}
          xl={{ span: 6, offset: 3 }}
        >
          <Card className="m-2 mt-3" border="primary">
            <textarea
              rows="2"
              type="textarea"
              className="form-control"
              onChange={(e) => setString(e.target.value)}
            />
          </Card>
        </Col>
      </Row>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {[
          <Statistics key="statistics" string={string} />,
          <StringManipulation key="string-manipulation" string={string} />,
          <PickOneSkipN key="pick-one-skip-n" string={string} />,
          <CaesarShift key="caesar-shift" string={string} />,
        ]}
      </Masonry>
    </Container>
    // <Container fluid>
    //   <Row xs={1} md={2} xl={3} noGutters>
    //     <Col
    //       xs={{ span: 12 }}
    //       md={{ span: 8, offset: 2 }}
    //       xl={{ span: 6, offset: 3 }}
    //     >
    //       <Card className="m-2 mt-3" border="primary">
    //         <textarea
    //           rows="2"
    //           type="textarea"
    //           className="form-control"
    //           onChange={(e) => setString(e.target.value)}
    //         />
    //       </Card>
    //     </Col>
    //     <Col>
    //       <Statistics string={string} />
    //     </Col>
    //     <Col>
    //       <StringManipulation string={string} />
    //     </Col>

    //     <Col>
    //       <PickOneSkipN string={string} />
    //     </Col>
    //     <Col>
    //       <CaesarShift string={string} />
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
