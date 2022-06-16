import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 30vh;
  width: 20vw;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: white;
  border-radius: 50px;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState<boolean>(false);
  const toggle = () => setClicked((prev) => !prev);
  return (
    <Wrapper>
      <Grid>
        <Box
          onClick={() => setId("1")}
          key={1}
          layoutId={"1"}
          whileHover={{
            scale: 1.1,
            originX: 1,
            originY: 1,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        ></Box>
        <Box
          onClick={() => setId("2")}
          key={2}
          layoutId={"2"}
          whileHover={{
            scale: 1.1,
            originX: 0,
            originY: 1,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          {!clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          onClick={() => setId("3")}
          key={3}
          layoutId={"3"}
          whileHover={{
            scale: 1.1,
            originX: 1,
            originY: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          {clicked ? <Circle layoutId="circle" /> : null}
        </Box>
        <Box
          onClick={() => setId("4")}
          key={4}
          layoutId={"4"}
          whileHover={{
            scale: 1.1,
            originX: 0,
            originY: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        ></Box>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 250,
                backgroundColor: "rgba(255, 255, 255, 1)",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <button onClick={toggle}>Switch</button>
    </Wrapper>
  );
}

export default App;
