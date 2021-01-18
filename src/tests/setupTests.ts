import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { createSerializer } from "enzyme-to-json";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
