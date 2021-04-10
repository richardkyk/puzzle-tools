import PickOneSkipN from "./components/PickOneSkipN";
import CaesarShift from "./components/CaesarShift";
import StringManipulation from "./components/StringManipulation";
import Statistics from "./components/Statistics";
import {
  Card,
  Col,
  Row,
  Container,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import Masonry from "react-masonry-css";
import { useString } from "./contexts/StringContext";

function App() {
  const {
    string,
    setString,
    canUndo,
    undoString,
    canRedo,
    redoString,
  } = useString();
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
              value={string}
              onChange={(e) => setString(e.target.value)}
            />
          </Card>

          <ButtonGroup className="ml-2" size="sm">
            <Button
              className="mr-2"
              variant="outline-primary"
              disabled={!canUndo}
              onClick={undoString}
            >
              {"<"}
            </Button>
            <Button
              variant="outline-primary"
              disabled={!canRedo}
              onClick={redoString}
            >
              {">"}
            </Button>
          </ButtonGroup>
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
  );
}

export default App;
