import React, { useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import Output from "../../components/resume/Clean";
import { usePDF } from "@react-pdf/renderer";
import { updateResume } from "../../services/resumes";
import { Button, Container, Center } from "@mantine/core";
import { useDidUpdate } from "@mantine/hooks";
import { useDebouncedValue } from "@mantine/hooks";

function Viewer({ id, form }) {
  const [debouncedValues] = useDebouncedValue(form.values, 1000);
  const template = Output(debouncedValues);
  const [instance, updateInstance] = usePDF({ document: template });

  useDidUpdate(() => {
    updateInstance();
    updateResume(debouncedValues, id);
  }, [debouncedValues]);

  //   useEffect(() => {
  //     updateInstance();
  //     updateResume(debouncedValues, id);
  //   }, [debouncedValues]);

  return (
    <>
      <Container sx={{ h: "100%" }}>
        <Button
          variant="light"
          color="gray"
          download="Resume.pdf"
          component="a"
          href={instance.url}
          sx={{ margin: "10px 0 25px" }}
        >
          Download
        </Button>
        <Center>
          <Document file={instance.url}>
            <Page height={900} pageNumber={1} />
          </Document>
        </Center>
      </Container>
    </>
  );
}

export default Viewer;
